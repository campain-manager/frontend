import dotenv from "dotenv";
import fs from "node:fs";

dotenv.config({
    path: ".env.local",
});

async function generate() {
    const openApi = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v3/api-docs`
    ).then(r => r.json());

    type ResourceOperations = {
        list?: string;
        getOne?: string;
        create?: string;
        update?: string;
        deleteOne?: string;
    };


    const resources: Record<string, ResourceOperations> = {};

    const imports = new Set<string>();


    function getResourceName(path: string): string | null {

        const parts = path
            .split("/")
            .filter(Boolean);

        if (parts.length === 0) {
            return null;
        }

        return parts[0];
    }


    function hasPathVariable(path: string): boolean {

        return path.includes("{");
    }


    function addOperation(
        resource: string,
        operation: string,
        operationId: string
    ) {

        resources[resource] ??= {};

        resources[resource][operation] = operationId;

        imports.add(operationId);
    }


    for (const [path, methods] of Object.entries(openApi.paths)) {

        const resource = getResourceName(path);

        if (!resource) {
            continue;
        }


        for (const [method, definition] of Object.entries(methods as any)) {

            const operationId = definition.operationId;

            if (!operationId || !operationId.match(/^(get|post|patch|delete)([A-Z].*)$/)) {
                continue;
            }


            imports.add(operationId);


            const hasId = hasPathVariable(path);


            switch (method.toLowerCase()) {

                case "get":

                    if (hasId) {
                        addOperation(
                            resource,
                            "getOne",
                            operationId
                        );
                    }
                    else {
                        addOperation(
                            resource,
                            "list",
                            operationId
                        );
                    }

                    break;


                case "post":

                    addOperation(
                        resource,
                        "create",
                        operationId
                    );

                    break;


                case "patch":
                case "put":

                    addOperation(
                        resource,
                        "update",
                        operationId
                    );

                    break;


                case "delete":

                    addOperation(
                        resource,
                        "deleteOne",
                        operationId
                    );

                    break;
            }
        }
    }


    // produces:
    // import { getProducts, getProduct } from "./generated";

    const importBlock = `
import {
${[...imports]
            .map(name => `    ${name}`)
            .join(",\n")}
} from "./generated";
`;


    // produces:
    // products: {
    //    list: getProducts
    // }

    function stringifyObject(obj) {
        return `{ 
    ${Object.entries(obj)
                .map(([key, value]) => {
                    const validKey = /^[a-zA-Z_$][\w$]*$/.test(key);
                    const formattedKey = validKey ? key : JSON.stringify(key);
                    return `${formattedKey}: ${JSON.stringify(value, null, 4)
                        .replace(
                            /"([^"]+)":/g,
                            "$1:"
                        )
                        .replace(
                            /"([^"]+)"/g,
                            "$1"
                        )
                        .replace(
                            /\n(.)/g,
                            "\n    $1"
                        )
                        }`;
                })
                .join(", ")}
}`;
    }

    const resourceBlock = stringifyObject(resources);


    const output = `

${importBlock}


export const resources = ${resourceBlock};

`;


    fs.writeFileSync(
        "src/api/resources.ts",
        output
    );


    console.log(
        "Refine resources generated"
    );
}

generate();


// import { Project } from "ts-morph";
// import fs from "node:fs";


// const project = new Project();

// const file = project.addSourceFileAtPath(
//     "src/api/generated.ts"
// );


// const functions = file
//     // .getFunctions()
//     // .map(fn => fn.getName())
//     .getVariableDeclarations()
//     .filter(variable =>
//         variable.getInitializer()?.getKindName() === "ArrowFunction"
//     )
//     .map(variable => variable.getName())
//     .filter(Boolean) as string[];


// const resources: Record<string, any> = {};


// for (const fn of functions) {

//     const match = fn.match(
//         /^(get|post|patch|delete)([A-Z].*)$/
//     );


//     if (!match)
//         continue;


//     const [
//         ,
//         method,
//         name
//     ] = match;


//     const resource =
//         name
//             .replace(/Id$/, "")
//             .toLowerCase();


//     resources[resource] ??= {};


//     switch (method) {

//         case "get":

//             if (fn.endsWith("Id")) {
//                 resources[resource].getOne = fn;
//             }
//             else {
//                 resources[resource].list = fn;
//             }

//             break;


//         case "post":
//             resources[resource].create = fn;
//             break;


//         case "patch":
//             resources[resource].update = fn;
//             break;


//         case "delete":
//             resources[resource].deleteOne = fn;
//             break;
//     }

// }


// const imports =
//     Object.values(resources)
//         .flatMap(r => Object.values(r))
//         .map(x => `    ${x}`)
//         .join(",\n");


// const body = `

// import {
// ${imports}
// } from "./generated";


// export const resources = ${JSON.stringify(
//     resources,
//     null,
//     4
// )}
// `;

// fs.writeFileSync(
//     "src/api/resources.ts",
//     body
// );


// console.log(
//     "Data resources generated"
// );
import dotenv from "dotenv";
import { defineConfig } from "orval";

dotenv.config({
    path: ".env.local",
});

export default defineConfig({
    backendApi: {
        input: `${process.env.NEXT_PUBLIC_API_URL}/v3/api-docs`,
        output: {
            mode: "single",
            target: "src/api/generated.ts",
            client: "react-query",
            httpClient: "axios",
            override: {
                mutator: {
                    path: "./src/api/axios.ts",
                    name: "api"
                }
            }
        },
    },
});
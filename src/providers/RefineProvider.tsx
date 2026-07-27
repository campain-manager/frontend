"use client";

import { Refine } from "@refinedev/core";
import dataProvider from "./dataProvider";

export function RefineProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <Refine
            dataProvider={dataProvider}
            resources={[
                {
                    name: "products",
                },
                {
                    name: "campaigns",
                },
            ]}
        >
            {children}
        </Refine>
    );
}
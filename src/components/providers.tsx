"use client";

import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

import theme from "@/theme";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter"; // must comply with the version of nextjs
import { RefineProvider } from "@/providers/RefineProvider";

export default function Providers({
    children,
}: {
    children: React.ReactNode;
}) {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <QueryClientProvider client={queryClient}>
                    <RefineProvider>
                        {children}
                    </RefineProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </AppRouterCacheProvider>
    );
}
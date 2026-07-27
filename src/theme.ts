"use client";

import { createTheme } from "@mui/material/styles";
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const theme = createTheme({
    colorSchemes: {
        light: {
            palette: {
                // mode: "light",

                primary: {
                    main: "#3fdc2d",
                },

                secondary: {
                    main: "#918edf",
                },

                background: {
                    default: "#F5F5F5",
                    paper: "#FFFFFF",
                },
                text: {
                    primary: "#1F2937",
                    secondary: "#6B7280",
                    disabled: "#9CA3AF",
                }
            },
        },
        dark: {
            palette: {
                // text: {
                //     primary: "#7892B6",
                //     // secondary: "#1F2937"
                // }

                primary: {
                    main: "#3fdc2d",
                },
                secondary: {
                    main: "#918edf",
                },
                background: {
                    default: "#121212",
                    paper: "#1E1E1E",
                },
                text: {
                    primary: "#5d87c2",
                    secondary: "#606e81",
                    disabled: "#6B7280",
                },
            }
        }
    },
    cssVariables: {
        colorSchemeSelector: 'class',
    },
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
});

export default theme;
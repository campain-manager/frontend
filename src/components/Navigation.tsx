"use client";

import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ModeSwitch from "@/components/ModeSwitch";

export default function Navigation() {
    return (
        <AppBar position="static" sx={{
            zIndex: 1
        }}>
            <Toolbar>
                <Typography variant="h5" sx={{ flexGrow: 1 }}>
                    Campaign Manager
                </Typography>

                <Button color="inherit" component={Link} href="/products">
                    Products
                </Button>

                <Button color="inherit" component={Link} href="/campaigns">
                    Campaigns
                </Button>

                <ModeSwitch />
            </Toolbar>
        </AppBar>
    );
}
"use client";

import { useRegister } from "@/api/generated";
import { Button, Card, CardContent, CardHeader, Input, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {

    const loginMutation = useRegister();

    const [login, setLogin] = useState("user");
    const [password, setPassword] = useState("password");

    const router = useRouter();


    async function handleRegister() {
        loginMutation.mutate(
            {
                data: {
                    username: login,
                    password: password
                }
            },
            {
                onSuccess(data) {
                    router.push("/products");
                }
            }
        );
    }


    return (

        <Card sx={{ maxWidth: 345, alignSelf: "center" }}>
            <CardHeader
                title="Card Title"
                subheader="Card subtitle"
            />

            <CardContent>
                <Typography variant="body2">
                    Login
                </Typography>
                <Input type="text" value={login} onChange={(e) => { setLogin(e.target.value) }} />

                <Typography variant="body2">
                    Password
                </Typography>
                <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                <Button onClick={handleRegister}>Zarejestruj się</Button>
            </CardContent>
        </Card>
    );
}
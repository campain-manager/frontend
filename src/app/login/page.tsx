"use client";

import { useLogin } from "@/api/generated";
import { Button, Card, CardContent, CardHeader, Input, Stack, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginForm() {

    const loginMutation = useLogin();

    const [login, setLogin] = useState("user");
    const [password, setPassword] = useState("password");

    const router = useRouter();


    async function handleLogin() {
        const data = await loginMutation.mutateAsync({
            data: {
                username: login,
                password,
            },
        });

        localStorage.setItem(
            "token",
            data.data.token ?? ""
        );

        router.push("/products");
    }


    return (

        <Card sx={{ maxWidth: 345, alignSelf: "center" }}>
            <CardHeader
                title="Card Title"
                subheader="Card subtitle"
            />

            <CardContent sx={{ minWidth: 400 }}>
                <Stack direction={"column"}>
                    <Typography variant="body2">
                        Login
                    </Typography>
                    <Input type="text" value={login} onChange={(e) => { setLogin(e.target.value) }} />

                    <Typography variant="body2">
                        Password
                    </Typography>
                    <Input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                    <Button onClick={handleLogin}>Zaloguj się</Button>

                    <Button href="/register" >Zarejestruj się</Button>

                </Stack>
            </CardContent>
        </Card>
    );
}
import dotenv from "dotenv";
import axios from "axios";

dotenv.config({
    path: ".env.local",
});


export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
});


api.interceptors.request.use(
    config => {

        const token =
            localStorage.getItem("token");

        console.log("JWT Token:", token);

        if (token) {
            config.headers.Authorization =
                `Bearer ${token}`;
        }

        return config;
    }
);
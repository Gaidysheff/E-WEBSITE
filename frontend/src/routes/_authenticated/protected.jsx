import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/constants.js";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import api from "@/api.js";
import { jwtDecode } from "jwt-decode";

export const Route = createFileRoute("/_authenticated/protected")({
  component: ProtectedPage,
});

function ProtectedPage({ children }) {

    const [isAuthorized, setIsAuthorized] = useState(null);
    console.log("🚀 isAuthorized-1:", isAuthorized)

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
        console.log("🚀 isAuthorized-2:", isAuthorized)
    }, [])

    const refreshToken = async () => {

        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                setIsAuthorized(true)
            } else {
                setIsAuthorized(false)
            }
            
        } catch (error) {
            console.log(error);
            setIsAuthorized(false);
        }
  };

    const auth = async () => {
    
        const token = localStorage.getItem(ACCESS_TOKEN);
        
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
  };

    if (isAuthorized === null) {
        return <div>Loading...</div>;
    }
    
    return isAuthorized ? children : redirect({to:"/login"});

}



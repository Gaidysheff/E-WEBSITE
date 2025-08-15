import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/constants.js";
import {createContext, useCallback, useContext, useEffect, useLayoutEffect, useState} from 'react'
import { createFileRoute, redirect } from "@tanstack/react-router";

import api from "@/api.js";
import { jwtDecode } from "jwt-decode";
import { sleep } from './../lib/utils.js'

const AuthContext = createContext(null)

export function useAuth() {
  const authContext = useContext(AuthContext)
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return authContext
}

// const key = 'tanstack.auth.user'

// function getStoredUser() {
//   return localStorage.getItem(key)
// }

// function setStoredUser(user) {
//   if (user) {
//     localStorage.setItem(key, user)
//   } else {
//     localStorage.removeItem(key)
//   }
// }

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(getStoredUser())
//   const isAuthenticated = !!user

//   const logout = useCallback(async () => {
//     await sleep(250)

//     setStoredUser(null)
//     setUser(null)
//   }, [])

//   const login = useCallback(async (username) => {
//     await sleep(500)

//     setStoredUser(username)
//     setUser(username)
//   }, [])

//   useEffect(() => {
//     setUser(getStoredUser())
//   }, [])

export function AuthProvider({ children }) {
  
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
        auth().catch(() => setIsAuthenticated(false))
    }, [])

    const refreshToken = async () => {

        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        
        try {
            const res = await api.post("/api/token/refresh/", {
                refresh: refreshToken,
            });
            
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access)
                console.log("🚀 ~ refreshToken ~ ACCESS_TOKEN:", ACCESS_TOKEN, res.data.access)
                setIsAuthenticated(true)
            } else {
                setisAuthenticated(false)
            }
            
        } catch (error) {
            console.log(error);
            setIsAuthenticated(false);
        }
  };

    const auth = async () => {
    
        const token = localStorage.getItem(ACCESS_TOKEN);
        
        if (!token) {
            setIsAuthenticated(false);
            return;
        }
        
        const decoded = jwtDecode(token);
        console.log("🚀 ~ auth ~ token:", token)
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration < now) {
            await refreshToken();
        } else {
            setIsAuthenticated(true);
        }
  };

    if (isAuthenticated === null) {
        return <div>Loading...</div>;
    }
    
  return <AuthContext.Provider value={{ isAuthenticated }}>
    {/* <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}> */}
      {children}
    </AuthContext.Provider>
  
}


import './Form.css';

import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/lib/constants";

import LoadingIndicator from "@/components/loading/LoadingIndicator";
import api from "@/api";
import { useNavigate } from '@tanstack/react-router'
import { useState } from "react";

// import { useNavigate } from "react-router-dom";


const Form = ({ route, method }) => {
	
	const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

	const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const submitHandler = async (event) => {
        setLoading(true);
        event.preventDefault();

        try {
            const res = await api.post(route, { username, password })

						
            if (method === "login") {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate({to: "/"})
            } else {
                navigate({to: "/login"})
            }
        } catch (error) {
            alert(error)
        } finally {
            setLoading(false)
        }
    };
		
	return (
        <form onSubmit={submitHandler} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                placeholder="Username"
            />
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="Password"
            />

            {loading && <LoadingIndicator />}
						
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
	)
}

export default Form

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from 'axios';

import { setToken } from "../../state/auth/authSlice";
import classes from "../../css/login.module.css"


export default function Login({ setRole }) {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();

    const initialLoginData = {
        username: "",
        password: ""
    };
    const [loginData, setLoginData] = useState(initialLoginData);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/isLogin`, loginData);
            if (response.status === 200) {
                setRole("admin");
                dispatch(setToken(response.data))
                const from = location.state?.from?.pathname || "/home";
                navigate(from, { replace: true });
            }
        } catch (error) {
            if (error.response.status === 401) {
                alert("username or password wrong");
            }
            alert("error logging in... try again later")
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginData((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    }


    return (
        <>
            <div className={classes.loginContainer}>
                <h1 className={classes.loginHeading}>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="username" id="username" value={loginData.username} onChange={handleChange} placeholder="Enter username" /><br />
                    <input type="password" name="password" id="password" value={loginData.password} onChange={handleChange} placeholder="Enter password" /><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}
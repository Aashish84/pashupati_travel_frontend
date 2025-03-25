import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../state/auth/authSlice";

export default function Header(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.auth.token);

    function handleLogout(){
        dispatch(logout());
        navigate("/login");
    }

    function renderAuthLinks() {
        if (token) {
            return <button onClick={handleLogout}>Logout</button>;
        }
        return <Link to="/login">Login</Link>;
    }

    return(
        <nav>
            <ul>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/admin">admin</Link></li>
                <li>{renderAuthLinks()}</li>
            </ul>
        </nav>
    )
}
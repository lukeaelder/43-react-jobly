import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import UserContext from "./user/UserContext";
import "./navigation.css"

const Navigation = ({logout}) => {
    const { curUser } = useContext(UserContext);

    const loggedIn = () => {
        return(
            <div className="Navigation">
                <NavLink exact to="/">
                    <span>Jobly</span>
                </NavLink>
                <NavLink exact to="/companies">
                    <span>Companies</span>
                </NavLink>
                <NavLink exact to="/jobs">
                    <span>Jobs</span>
                </NavLink>
                <NavLink exact to="/profile">
                    <span>Profile</span>
                </NavLink>
                <Link to="/" onClick={logout}>
                    Logout
                </Link>
            </div>
        );
    }

    const notLoggedIn = () => {
        return (
            <div className="Navigation">
                <NavLink exact to="/">
                    <span>Jobly</span>
                </NavLink>
                <NavLink exact to="/login">
                    <span>Login</span>
                </NavLink>
                <NavLink exact to="/signup">
                    <span>Signup</span>
                </NavLink>
            </div>
        );
    }

    return (
        <>
            {curUser ? loggedIn() : notLoggedIn()}
        </>
    )
}

export default Navigation;
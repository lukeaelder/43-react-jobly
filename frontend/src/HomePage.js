import React, {useContext} from "react";
import {Link} from "react-router-dom";
import UserContext from "./user/UserContext";
import "./homepage.css"

const HomePage = () => {
    const {curUser} = useContext(UserContext);
    return (
        <div className="HomePage">
            <h1>Jobly</h1>
            <h3>All the jobs in one, convenient place.</h3>
            {curUser ?
                <h2>Welcome back, {curUser.firstName || curUser.username}!</h2>
            :
                <div>
                    <Link to="/login"><button>Login</button></Link>
                    <Link to="/Signup"><button>Signup</button></Link>
                </div>
            }
        </div>
    )
}

export default HomePage;
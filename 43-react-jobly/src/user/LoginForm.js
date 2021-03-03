import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./user.css";

const LoginForm = ({login}) => {
    const [formData, setFormData] = useState({username:"", password: ""});
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(i => ({...i, [name]:value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await login(formData);
        if (res.success) {
            history.push("/");
        } else {}
    }

    return (
        <div className="LoginForm">
            <h1>Login</h1>
            <form className="LoginForm-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;
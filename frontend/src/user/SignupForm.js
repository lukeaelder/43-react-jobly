import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "./user.css";

const SignupForm = ({signup}) => {
    const [formData, setFormData] = useState({username:"", password: "", firstName:"", lastName:"", email:""});
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(i => ({...i, [name]:value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let res = await signup(formData);
        if (res.success) {
            history.push("/companies");
        } else {}
    }

    return (
        <div className="SignupForm">
            <h1>Signup</h1>
            <form className="SignupForm-form" onSubmit={handleSubmit}>
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
                <label htmlFor="firstName">First Name</label>
                <input
                    type="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <button onSubmit={handleSubmit}>Signup</button>
            </form>
        </div>
    )
}

export default SignupForm;
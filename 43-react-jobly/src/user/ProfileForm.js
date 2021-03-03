import React, {useState, useContext} from "react";
import UserContext from "./UserContext";
import JoblyApi from "../api";

const ProfileForm = () => {
    const {curUser, setCurUser} = useContext(UserContext);
    const [formData, setFormData] = useState({email: curUser.email, firstName: curUser.firstName, lastName: curUser.lastName, password: ""});
    const [changed, setChanged] = useState(false);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(i => ({...i, [name]:value}));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setChanged(false);
        let res;
        try {
            res = await JoblyApi.saveUser(curUser.username, formData);
            setChanged(true);
        } catch (err) {
            return;
        }
        setFormData(f => ({...f, password:""}));
        setCurUser(res);
    }

    return (
        <div className="ProfileForm">
            <h1>{curUser.username}(s) profile</h1>
            <form className="ProfileForm-form" onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label htmlFor="password">Confirm password to make changes</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {changed ?
                    <button onSubmit={handleSubmit} className="saved-btn">Changes Saved!</button>
                :
                    <button onSubmit={handleSubmit}>Save Changes</button>
                }
            </form>
        </div>
    )
}

export default ProfileForm;
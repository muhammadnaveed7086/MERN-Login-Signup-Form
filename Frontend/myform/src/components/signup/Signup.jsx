import React, { useState } from "react";
import "./signup.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
const Signup = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSignup = () => {
        const { name, email, password, reEnterPassword } = user;
        if (name && email && password && (password === reEnterPassword)) {
            axios.post("http://localhost:9002/register", user)
                .then(res => {
                    alert(res.data.message);
                })
                .catch(err => {
                    alert("An error occurred: " + err.response.data.message);
                    console.error(err);
                });
        } else {
            alert("Invalid input");
        }
    };

    return (
        <>
            <div className="signup-form">
                <div className="text">Signup</div>
                <div className="form">
                    <div className="field">
                        <div className="fas fa-user"></div>
                        <input type="text" placeholder="Enter Name" name="name" value={user.name} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <div className="fas fa-envelope"></div>
                        <input type="email" placeholder="Enter Email" name="email" value={user.email} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <div className="fas fa-lock"></div>
                        <input type="password" placeholder="Enter Password" name="password" value={user.password} onChange={handleChange} />
                    </div>
                    <div className="field">
                        <div className="fas fa-lock"></div>
                        <input type="password" placeholder="Re-enter Password" name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange} />
                    </div>
                    <button onClick={handleSignup}>Signup</button>
                    <div className="link">
                        Already have an Account? <NavLink to="/login">Login</NavLink>
                    </div>
                </div>
            </div>
        </> 
    );
};

export default Signup;

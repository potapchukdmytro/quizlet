import React from "react";
import { InputText } from "primereact/inputtext";
import { Avatar } from 'primereact/avatar';
import { Button } from "primereact/button";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="flex flex-column gap-2" style={{width: "30%", alignItems: "center", margin: "auto", paddingTop: "20px"}}>
            <Avatar label="Q" size="xlarge" />
            <div className="flex flex-column gap-2" style={{margin: "10px"}}>
                <label htmlFor="username">Username</label>
                <InputText id="username" aria-describedby="username-help" />
                <small id="username-help">
                    Enter your username.
                </small>
            </div>
            <div className="flex flex-column gap-2" style={{margin: "10px"}}>
                <label htmlFor="password">Password</label>
                <InputText id="password" aria-describedby="password-help" />
                <small id="password-help">
                    Enter your password.
                </small>
            </div>
            <div style={{display: "flex", justifyContent: "space-evenly", width: "100%"}}>
                <Button>Login</Button>
                <Link to="/">
                    <Button>Back</Button>
                </Link>
            </div>
        </div>
    );
};

export default Login;

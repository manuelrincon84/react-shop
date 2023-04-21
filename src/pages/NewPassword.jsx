import React from "react";
import '@styles/NewPassword.scss';
import logo from "@logos/logo_yard_sale.svg";

const Login = () => {
    return (
        <div className="new-password">
            <div className="new-password-container">
                <img src={logo} alt="logo" className="np-logo"/>
                <h1 className="title">Create a new password</h1>
                <p className="subtitle">Enter a new password for your account</p>

                <form action="/" className="form">
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"/>
                    <label htmlFor="new password" className="label">New Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password"/>
                    <input type="submit" value="Comfirm" className="primary-button login-button"/>
                </form>
            </div>

        </div>
    );
}

export default Login;
import React from "react";
import'@styles/SendEmail.scss';
import logo from "@logos/logo_yard_sale.svg";

const SendEmail = () => {
    return (
        <div className="send-email">
        <div className="form-container">
            <img src={logo} alt="logo" className="se-logo"/>
            <h1 className="title">Email has been sent!</h1>
            <p className="subtitle">Plaese check your inbox for instrutions on how to reset the password</p>
            <div className="email-image">
                <img src="./icons/email.svg" alt="email"/>
            </div>            
            <button className="primary-button login-button">Login</button>
            <p className="resend">
                <span>Didn't receive the email?</span>
                <a href="/">Resend</a>
            </p>
        </div>
    </div>
    );
}

export default SendEmail;
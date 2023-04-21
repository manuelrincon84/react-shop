import React from "react";
import '@styles/NotFound.scss';

const NotFound = () => {
    return (
        <section className="page_404">
            <div className="container">
                <div className="container-title">
                    <h1 className="title-error">404</h1>
                </div>
                <div className="image">
                    <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="error" className="error"/>
                </div>
                <div className="contant_box_404">
                    <h3 className="four_zero_four_bg h2">look like you're lost</h3>
                    <p>the page you are looking for not avaible!</p>
                    <a href="" className="link_404">Go to Home</a>
                </div>
            </div>
        </section>
    );
}

export default NotFound;
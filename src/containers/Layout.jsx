import React from "react";
import Header from "@components/Header";

const Layout = ({children}) => {
    return (
        <div className="Layout"> {/*es un encapsulamiento para que aqui reciba componentes del proyecto de forma ordenada*/}
            <Header />
            {children}
        </div>
    );
}

export default Layout;
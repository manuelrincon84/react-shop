import React, { useState, useContext } from "react";
import "@styles/Header.scss";
import DesktopMenu from '@components/DesktopMenu';
import menu from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "@context/AppContext";
import shoppingcart from "@icons/icon_shopping_cart.svg";

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const { state } = useContext(AppContext);

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furniture</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToggle}>
                        pepitoperez@gmail.com
                    </li>
                    <li className="navbar-shopping-cart">
                        <img src={shoppingcart} alt="shopping cart" />
                        {state > 0 ? <div>{state}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <DesktopMenu />}            
        </nav>
    );
}

export default Header;
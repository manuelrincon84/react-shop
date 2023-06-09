import React from "react";
import '@styles/ShoppingCart.scss';

const ShoppingCart = () => {
    return (
        <div className="shopping-cart">
            <figure>
                <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="bike"/>
            </figure>
            <p>Bike</p>
            <p>$30.00</p>
        </div>
    );
}

export default ShoppingCart;
import React, { useContext } from "react";
import '@styles/ProductItem.scss';
import AppContext from '@context/AppContext'
import add_to_cart from '@icons/bt_add_to_cart.svg';

const ProductItem = ({product}) => {
    const { state, setState} = useContext(AppContext);

    const handleClick = item => {
        setState({
            ...state,
            cart: [...state.cart, item]
        });
    }

    return (
        <div className="product-item">
            <img src={product.images[0]} alt={product.title}/>
            <div className="product-info">
                <div>
                    <p>${product.price}</p>
                    <p>{product.title}</p>
                </div>
                <figure onClick={() => handleClick (product)}>
                    <img src={add_to_cart} alt=""/>
                </figure>
            </div>

        </div>
    );
}

export default ProductItem;
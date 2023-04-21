import React from "react";
import '@components/ProductInfo';
import '@styles/ProductDetail.scss';
import close from "@icons/icon_close.png"

const ProductDetail = () => {
    return (
        <aside className="product-detail">
            <div className="product-detail-close">
                <img src={close} alt="close"/>
            </div>
            <ProductInfo />
        </aside>
    );
}

export default ProductDetail;
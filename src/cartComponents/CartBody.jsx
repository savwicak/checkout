import React from "react";

function CartBody({ name, type, size, price }) {
    return (
        <div className="cart-body">
            <h3 className="cart-title">{name}</h3>

            <p className="cart-info">
                Type: {type}
            </p>

            <p className="cart-info">
                Size: {size}
            </p>

            <p className="cart-price">
                Rp {price.toLocaleString("id-ID")}
            </p>
        </div>
    );
}

export default CartBody
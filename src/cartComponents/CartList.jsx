import React from "react";
import CartItem from "./CartItem";

function CartList({ Carts, onDelete }) {
    return (
        <div className="cart-list">
            {Carts.map((Cart) => (
                <CartItem
                    key={Cart.id}
                    {...Cart}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
}
export default CartList
import React from "react";
import CartBody from "./CartBody";
import CartImage from "./CartImage";
import DeleteButton from "./DeleteButton";

function CartItem({
    imageUrl,
    name,
    type,
    size,
    price,
    id,
    onDelete
}) {
    return (
        <div className="cart-item">
            <CartImage imageUrl={imageUrl} />

            <CartBody
                name={name}
                type={type}
                size={size}
                price={price}
            />

            <DeleteButton
                id={id}
                onDelete={onDelete}
            />
        </div>
    );
}

export default CartItem;
import React from "react";
import CartBody from "./CartBody";
import CartImage from "./CartImage";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton"

function CartItem({
    imageUrl,
    name,
    type,
    size,
    price,
    id,
    onDelete,
    onEdit
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

            <EditButton 
                id={id}
                onEdit={onEdit}
                />

            <DeleteButton
                id={id}
                onDelete={onDelete}
            />
        </div>
    );
}

export default CartItem;
import React from "react";

function CartImage({ imageUrl }) {
    return (
        <div className="cart-image">
            <img src={ imageUrl } alt="avatar" width={200} />
        </div>
    )
}

export default CartImage
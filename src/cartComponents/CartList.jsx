import React from "react";
import CartItem from "./CartItem";
import SearchBar from "./SearchBar"

function CartList({
     Carts, 
     onDelete,
     onEdit,
     keyword,
     onKeywordChanged
    }) 
{
    return (
        <div>
            <div className="search">
                <SearchBar
                    name={keyword}
                    onChange={onKeywordChanged}
                />
            </div>
            <div className="cart-list">
                {Carts.map((Cart) => (
                    <CartItem
                        key={Cart.id}
                        {...Cart}
                        onDelete={onDelete}
                        onEdit={onEdit}
                    />
                ))}
            </div>
        </div>
    );
}
export default CartList
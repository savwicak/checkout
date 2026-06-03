import React from "react";
import CartList from "./CartList";
import { getData } from "../utils/data";
import CartInput from "./CartInput";

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
       Carts: getData()
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onAddCartHandler = this.onAddCartHandler.bind(this);
    }

    onDeleteHandler(id){
        const Carts = this.state.Carts.filter(Cart => Cart.id !== id)
        this.setState({ Carts })
    }

    onAddCartHandler({ name, type, size, price, imageUrl }) {

        if (
            !name.trim() ||
            !type.trim() ||
            !size.trim() ||
            !price ||
            !imageUrl.trim()
        ) {
            alert("Please fill in all fields!");
            return;
        }

        const newCart = {
            id: Date.now(),
            name,
            type,
            size,
            price: Number(price),
            imageUrl
        };

        this.setState(prevState => ({
            Carts: [...prevState.Carts, newCart]
        }));
    }

    render() {
        return (
            <div className="cart">
                <h1>Chendoll</h1>

                <div className="cart-content">

                    <CartList
                        Carts={this.state.Carts}
                        onDelete={this.onDeleteHandler}
                    />

                    <CartInput
                        addCart={this.onAddCartHandler}
                    />

                </div>
            </div>
        )
    }
}

export default Cart
import React from "react";
import CartList from "./CartList";
import { getData } from "../utils/data";
import CartInput from "./CartInput";
import EditModal from "./EditModal";

class Cart extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Carts: getData(),
            keyword: "",
            editingCart: null
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this)
        this.onAddCartHandler = this.onAddCartHandler.bind(this)
        this.onEditHandler = this.onEditHandler.bind(this)
        this.onKeywordChangedHandler = this.onKeywordChangedHandler.bind(this)
        this.onUpdateHandler = this.onUpdateHandler.bind(this);
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
        }

        this.setState(prevState => ({
            Carts: [...prevState.Carts, newCart]
        }))
    }

    onEditHandler(id){
         const editingCart =
            this.state.Carts.find(
                cart => cart.id === id
            );

        this.setState({
            editingCart
        });
    }

    onKeywordChangedHandler(event){
        this.setState({
            keyword: event.target.value
        })
    }

     onUpdateHandler(id, newData){
        const Carts = this.state.Carts.map(cart=>
            cart.id === id? 
                {...cart, ...newData}
                : cart
        )

        this.setState({
            Carts,
            editingCart: null
        })
    }

    render() {

        const filteredCarts = this.state.Carts.filter(cart =>
            cart.name.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            )
        );
        
        return (
            <div className="cart">
                <h1>Chendoll</h1>

                <div className="cart-content">

                    <CartList
                        Carts={filteredCarts}
                        onDelete={this.onDeleteHandler}
                        keyword={this.state.keyword}
                        onKeywordChanged={this.onKeywordChangedHandler}
                        onEdit={this.onEditHandler}
                    />

                    {
                        this.state.editingCart ? (
                            <EditModal
                                cart={this.state.editingCart}
                                onSave={this.onUpdateHandler}
                                onClose={() =>
                                    this.setState({
                                        editingCart: null
                                    })
                                }
                            />
                        ) : (
                            <CartInput
                                addCart={this.onAddCartHandler}
                            />
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Cart
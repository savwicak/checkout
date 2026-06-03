import React from "react";

class CartInput extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name: "",
            type: "",
            size: "",
            price: "",
            imageUrl: ""
        };

        this.onSubmitEventHandler =
            this.onSubmitEventHandler.bind(this);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        this.props.addCart({
            name: this.state.name,
            type: this.state.type,
            size: this.state.size,
            price: this.state.price,
            imageUrl: this.state.imageUrl
        });

        this.setState({
            name: "",
            type: "",
            size: "",
            price: "",
            imageUrl: ""
        });
    }

    render() {
        return (
            <div>
                <h2>Add Doll Data</h2>
                <br />
                <form
                    className="cart-input"
                    onSubmit={this.onSubmitEventHandler}
                >
                    <label htmlFor="nama">Doll Name</label>
                    <input
                        type="text"
                        placeholder="Budi MasBudi"
                        value={this.state.name}
                        onChange={(e) =>
                            this.setState({ name: e.target.value })
                        }
                    />

                    <label htmlFor="jenis">Type</label>
                    <input
                        type="text"
                        placeholder="Cats"
                        value={this.state.type}
                        onChange={(e) =>
                            this.setState({ type: e.target.value })
                        }
                    />

                    <label htmlFor="nama">Size</label>
                    <input
                        type="text"
                        placeholder="Huge"
                        value={this.state.size}
                        onChange={(e) =>
                            this.setState({ size: e.target.value })
                        }
                    />

                    <label htmlFor="nama">Price</label>
                    <input
                        type="number"
                        placeholder="20000"
                        value={this.state.price}
                        onChange={(e) =>
                            this.setState({ price: e.target.value })
                        }
                    />

                    <label htmlFor="nama">Image Link</label>
                    <input
                        type="text"
                        placeholder="Your nice image (link)"
                        value={this.state.imageUrl}
                        onChange={(e) =>
                            this.setState({ imageUrl: e.target.value })
                        }
                    />

                    <button type="submit">
                        Tambah
                    </button>
                </form>
                <div className="more-content">
                    <h4>Checkout your Doll (Chendoll) is A fake company :D</h4>
                    <p>this company selling a plusies and dolls, and you become the admin that add more ssuff to this company :p</p>
                    <img src="https://img1.picmix.com/output/stamp/normal/3/9/6/5/2385693_24329.gif" alt="kirby" />
                </div>
            </div>
        );
    }
}

export default CartInput;
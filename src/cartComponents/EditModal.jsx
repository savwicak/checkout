import React from "react";

class EditModal extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        name: props.cart.name,
        type: props.cart.type,
        size: props.cart.size,
        price: props.cart.price,
        imageUrl: props.cart.imageUrl
    };


        this.onSubmitEventHandler =
            this.onSubmitEventHandler.bind(this);
    }

    onSubmitEventHandler(event) {
        event.preventDefault();

        this.props.onSave(
        this.props.cart.id,
        {
            name: this.state.name,
            type: this.state.type,
            size: this.state.size,
            price: this.state.price,
            imageUrl: this.state.imageUrl
        }
    );

        this.props.onClose()
    }

    render() {
        const {
            name,
            type,
            size,
            price,
            imageUrl
        } = this.state;
        return (
            <div>
                <h2>Edit Doll Data</h2>
                <br />
                <form
                    className="cart-input"
                    onSubmit={this.onSubmitEventHandler}
                >
                    <label htmlFor="nama">Doll Name</label>
                    <input
                        type="text"
                        placeholder="Budi MasBudi"
                        value={name}
                        onChange={(e) =>
                            this.setState({ name: e.target.value })
                        }
                    />

                    <label htmlFor="jenis">Type</label>
                    <input
                        type="text"
                        placeholder="Cats"
                        value={type}
                        onChange={(e) =>
                            this.setState({ type: e.target.value })
                        }
                    />

                    <label htmlFor="nama">Size</label>
                    <input
                        type="text"
                        placeholder="Huge"
                        value={size}
                        onChange={(e) =>
                            this.setState({ size: e.target.value })
                        }
                    />

                    <label htmlFor="nama">Price</label>
                    <input
                        type="number"
                        placeholder="20000"
                        value={price}
                        onChange={(e) =>
                            this.setState({ price: e.target.value })
                        }
                    />

                    <label htmlFor="nama">Image Link</label>
                    <input
                        type="text"
                        placeholder="Your nice image (link)"
                        value={imageUrl}
                        onChange={(e) =>
                            this.setState({ imageUrl: e.target.value })
                        }
                    />

                    <button type="submit">
                        Save
                    </button>

                    <button
                        type="button"
                        onClick={this.props.onClose}
                    >
                        Cancel
                    </button>

                </form>
            </div>
        );
    }
}

export default EditModal;
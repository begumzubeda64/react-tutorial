import React from 'react';
import Counter from "./Counter";

class ProductItem extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            selectedProduct: {},
            quickViewProduct: {},
            isAdded: false
        };
    }

    addToCart(image, name, price, id, quantity) {
        this.setState(
            {
                selectedProduct: {
                    image: image,
                    name: name,
                    price: price,
                    id: id,
                    quantity: quantity
                }
            },() => {
                this.props.addToCart(this.state.selectedProduct);
            }
        );

        this.setState(
            {
                isAdded: true
            },
            function() {
                setTimeout(() => {
                    this.setState({
                        isAdded: false,
                        selectedProduct: {}
                    });
                }, 3500);
            }
        );
      }
      quickView(image, name, price, id) {
        this.setState(
            {
                quickViewProduct: {
                image: image,
                name: name,
                price: price,
                id: id
                }
            }, () => {
                this.props.openModal(this.state.quickViewProduct);
            }
        );
      }
    render() {
        let{ updateQuantity, image, name, price, id, productQuantity } = this.props;

        return (
        <div className="product">
            <div className="product-image">
                <img
                    src={image}
                    alt={name}
                    onClick={this.quickView.bind(
                        this,
                        image,
                        name,
                        price,
                        id,
                        productQuantity
                    )}
                />
            </div>
            <h4 className="product-name">{name}</h4>
            <p className="product-price">{price}</p>
            <Counter
              productQuantity={productQuantity}
              updateQuantity={updateQuantity}
              resetQuantity={this.resetQuantity}
            />
            <div className="product-action">
                <button
                    className={!this.state.isAdded ? "" : "added"}
                    type="button"
                    onClick={this.addToCart.bind(
                        this,
                        image,
                        name,
                        price,
                        id,
                        productQuantity
                    )}
                >
                    {!this.state.isAdded ? "ADD TO CART" : "✔ ADDED"}
                </button>
            </div>
        </div>
        );
    }
}

export default ProductItem;
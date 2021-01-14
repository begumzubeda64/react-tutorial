import React, { Component, createRef } from "react";
import CartScrollBar from "./CartScrollBar";
import EmptyCart from "../empty-states/EmptyCart";
import { findDOMNode } from "react-dom";

class HeaderComp extends Component {
    constructor(props) {
        super(props);

        this.searchBox = createRef();
        this.cartPreview = createRef();

        this.state = {
            showCart: false,
            cart: this.props.cartItems,
            mobileSearch: false
        };
    }

    componentDidMount() {
        document.addEventListener(
            "click",
            this.handleClickOutside,
            true
        );
    }

    handleCart = (e) => {
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleMobileSearch = (e) => {
        e.preventDefault();
        this.setState({
            mobileSearch: true
        });
    }

    handleSearchNav = (e) => {
        e.preventDefault();
        let self = this;
        this.setState(
            {
                mobileSearch: false
            },
            function() {
                self.searchBox.current.value = "";
                self.props.handleMobileSearch();
            }
        );
    }

    handleClickOutside = (event) => {
        const cartNode = findDOMNode(this.cartPreview.current);

        if (cartNode.classList.contains("active")) {
            if (!cartNode || !cartNode.contains(event.target)) {
                this.setState({
                    showCart: false
                });
                event.stopPropagation();
            }
        }
    } 

    componentWillUnmount() {
        document.removeEventListener(
            "click",
            this.handleClickOutside,
            true
        );
    }

  render() {
    let cartItems;
    cartItems = this.state.cart.map(product => {
        return (
            <li className="cart-item" key={product.id}>
                <img className="product-image" src={product.image} />
                <div className="product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                </div>
                <div className="product-total">
                    <p className="quantity">
                    {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
                    </p>
                    <p className="amount">{product.quantity * product.price}</p>
                </div>
                <a
                className="product-remove"
                href="#"
                onClick={this.props.removeProduct.bind(this, product.id)}
                >
                    ×
                </a>
            </li>
        );
    });

    let view;
    if (cartItems.length <= 0) {
        view = <EmptyCart />;
    } else {
        view = (
            <ul
            className="cart-items"
            >
            {cartItems}
            </ul>
        );
    }
    
    return (
    <header>
        <div className="container">
            <div className="brand">
                <img
                className="logo"
                src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png"
                alt="Veggy Brand Logo"
                />
            </div>

            <div className="search">
                <a
                className="mobile-search"
                href="#"
                onClick={this.handleMobileSearch}
                >
                <img
                    src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                    alt="search"
                />
                </a>
                <form
                action="#"
                method="get"
                className={
                    this.state.mobileSearch ? "search-form active" : "search-form"
                }
                >
                    <a
                        className="back-button"
                        href="#"
                        onClick={this.handleSearchNav}
                    >
                        <img
                        src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                        alt="back"
                        />
                    </a>
                    <input
                        type="search"
                        ref={this.searchBox}
                        placeholder="search"
                        className="search-keyword"
                        onChange={this.props.handleSearch}
                    />
                    <button
                        className="search-button"
                        type="submit"
                        onClick={this.handleSubmit}
                    />
                </form>
            </div>

            <div className="cart">
                <div className="cart-info">
                    <table>
                        <tbody>
                            <tr>
                                <td>Items</td>
                                <td></td>
                                <td>
                                    <strong>{this.props.totalItems}</strong>
                                </td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td></td>
                                <td>
                                    <strong>{this.props.total}</strong>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <a
                className="cart-icon"
                href="#"
                onClick={this.handleCart}
                ref="cartButton"
                >
                    <img
                        className={this.props.cartBounce ? "tada" : " "}
                        src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                        alt="Cart"
                    />
                    {this.props.totalItems ? (
                        <span className="cart-count">{this.props.totalItems}</span>
                    ) : (
                        ""
                    )}
                </a>
                <div
                    className={
                        this.state.showCart ? "cart-preview active" : "cart-preview"
                    }
                    ref={this.cartPreview}
                >
                    <CartScrollBar>{view}</CartScrollBar>
                    <div className="action-block">
                        <button
                        type="button"
                        className={this.state.cart.length > 0 ? " " : "disabled"}
                        >
                        PROCEED TO CHECKOUT
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
  }
}

export default HeaderComp;
import React from 'react';
import HeaderComp from './components/Header';
import Data from './components/mock/data';
import Products from './components/Products';
import FooterComp from "./components/Footer";
import QuickView from './components/QuickView';

class Container extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      products: [],
      cart: [],
      totalAmount: 0,
      totalItems: 0,
      term: '',
      category: "",
      cartBounce: false,
      quantity: 1,
      quickViewProduct: [],
      modalActive: false
    }

  }

  componentDidMount(){
    this.setState({
      products: Data
    });
  }

  validateAlreadyExist = (pid) => {
    let cart = this.state.cart;
    return cart.some(i => {
      return i.id === pid
    });
  }

  handleSearch = (e) => {
    this.setState({
      term: e.target.value
    });
  }

  handleCategory = (event) => {
    this.setState({ category: event.target.value });
  }

  handleMobileSearch = () => {
    this.setState({ term: "" });
  }

  handleAddProduct = (selectedProduct) => {
    const cartItem = this.state.cart;
    const productId = selectedProduct.id;
    let productQty = selectedProduct.quantity;

    if(this.validateAlreadyExist(productId)){
      let index = cartItem.findIndex(x => x.id === productId);
      cartItem[index].quantity = Number(cartItem[index].quantity) + Number(productQty);
      this.setState({
        cart: cartItem
      });
    } else {
      cartItem.push(selectedProduct);
    }

    this.setState({
      cart: cartItem,
      cartBounce: true
    });

    setTimeout(() => {
        this.setState({
          cartBounce: false,
          quantity: 1
        });
      },1000
    );

    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
  }

  handleRemoveProduct = (id, e) => {
    let cart = this.state.cart;
    let index = cart.findIndex(x => x.id === id);
    cart.splice(index, 1);
    this.setState({
      cart: cart
    });

    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }

  sumTotalItems = () => {
    let total = 0;
    let cart = this.state.cart;
    total = cart.length;
    this.setState({
      totalItems: total
    });
  }

  sumTotalAmount = () => {
    let total = 0;
    let cart = this.state.cart;
    for(var i = 0; i < cart.length; i++){
      total += cart[i].price * parseInt(cart[i].quantity);
    }
    this.setState({
      totalAmount: total
    });
  }

  updateQuantity = (qty) => {
    this.setState({
      quantity: qty
    });
  }

  openModal = (product) => {
    this.setState({
      quickViewProduct: product,
      modalActive: true
    });
  }

  closeModal = () => {
    this.setState({
      modalActive: false
    });
  }

  quickViewProduct = (product) => {
    this.setState({
      quickViewProduct: product
    })
  }

  render(){
    const { products, quantity, category, cartBounce, modalActive, quickViewProduct, totalAmount, totalItems, cart, term } = this.state;
    return (
      <div>
        <HeaderComp
          cartBounce={cartBounce}
          total={totalAmount}
          totalItems={totalItems}
          cartItems={cart}
          removeProduct={this.handleRemoveProduct}
          handleSearch={this.handleSearch}
          handleMobileSearch={this.handleMobileSearch}
          handleCategory={this.handleCategory}
          categoryTerm={category}
          updateQuantity={this.updateQuantity}
          productQuantity={quantity}
        />
        <Products
          products={products}
          searchTerm={term}
          addToCart={this.handleAddProduct}
          productQuantity={quantity}
          updateQuantity={this.updateQuantity}
          openModal={this.openModal}
        />
        <FooterComp />
        <QuickView
          product={quickViewProduct}
          openModal={modalActive}
          closeModal={this.closeModal}
        />
      </div>
    );
  }
  
}

export default Container;

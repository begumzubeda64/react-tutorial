import React, { useEffect, useState } from 'react';
import Product from './components/product';
import ProductForm from './components/product-form';
import Total from './components/total';

let productList = [
  { name: "android", price: 231, info: "product of google" },
  { name: "iphone", price: 784, info: "product of apple" },
  { name: "windows", price: 156, info: "product of microsoft" }
]

const ProductList = () => {
  const [ state, setState ] = useState({
    total: 0,
    productList: ""
  });

  useEffect(() => {
    setTimeout(() => {
      setState({ ...state, productList: productList });
    }, 1000);
  }, []);

  const createProduct = (product) => {
    state.productList.push(product);
    setState({...state, productList: state.productList});
  }

  const calculateTotal = (price) => {
    setState({ ...state,
      total: state.total + price
    });
  }

  const showProduct = (info) => {
    alert(info);
  }

  if(!state.productList) return <p>Loading...</p>
  const products = state.productList.map((product, index) => {
    return (
      <Product key={index} name={product.name} price={product.price}
      info={product.info} handleShow={showProduct}
      handleTotal={calculateTotal} />
    )
  });
  return (
    <div className="container my-3">
      <ProductForm handleProduct={createProduct} />
      {products}
      <Total total={state.total} />
    </div>
  );
}

export default ProductList;

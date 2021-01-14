import React from 'react';
import ProductItem from './productItem';
import NoResults from '../empty-states/NoResults';

class Products extends React.Component {
    render(){
        let productData = [];
        const { addToCart, productQuantity, updateQuantity, openModal, searchTerm, products } = this.props;

        productData = products.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase()) || !searchTerm;
        })
        .map((product) => {
            return(
                <ProductItem 
                id={product.id}
                price={product.price}
                name={product.name}
                image={product.image}
                productQuantity={productQuantity}
                updateQuantity={updateQuantity}
                openModal={openModal}
                addToCart={addToCart} 
                key={product.id} />
            );
        });

        let view;
        if (productData.length <= 0 && !searchTerm) {
            view = (<div>Loading....</div>);
        } else if (productData.length <= 0 && searchTerm) {
            view = <NoResults />;
        } else {
            view = (
                <div
                className="products"
                >
                {productData}
                </div>
            );
        }

        return <div className="products-wrapper">{view}</div>;

    }
}

export default Products;
import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';


const ProductContext = React.createContext();
// Provider
// Consumer

class ProductProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            detailProduct: detailProduct
        };
    }

    componentDidMount() {
        this.setProducts();
    }

    setProducts = () => {
        let prod = [];
        storeProducts.forEach(item => {
            const singleItem = {...item};
            prod = [...prod, singleItem];
        })
        this.setState(() => {
            return {products: prod}
        })
    }

    handleDetail = () => {
        console.log('Hello from handleDetail');
    }

    addToCart = () => {
        console.log('Hello from addToCart');
    }

    
    render() {
        return (
            <ProductContext.Provider value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}


const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };

import React, { Component } from 'react'
import Product from './Product';
import Title from './Title';
import { storeProducts } from '../data';


export default class ProductList extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            products: storeProducts
        }
    }

    render() {
        console.log(this.state.products);

        return (
            <React.Fragment>
                <div className="py-5">
                    <div className="container">
                        <Title name="our" title="products" />
                        <div className="row">
                            <ul>{this.state.products.map((a, i) => <li key={i}>{a.title} (price: ${a.price}) (company: {a.company})</li>)}</ul>
                        </div>
                    </div>          
                </div>
                {/* <Product /> */}
            </React.Fragment>
            
        )
    }
}

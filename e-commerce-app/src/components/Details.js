import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ProductConsumer } from '../context';
import { ButtonContainer } from './Button';


export default class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value) => {
                   const { id, company, price, info, img, title, inCart } = value.detailProduct;

                   return (
                       <div className="container pb-5">
                           {/* title */}
                           <div className="row">
                               <div className="col-11 mx-auto text-center text-slanted my-5">
                                   <h2>{title}</h2>
                               </div>
                           </div>

                            {/* product info */}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 my-3">
                                    <img src={img} alt="product" className="img-fluid"/>
                               </div>

                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4>model: {title}</h4>
                                    <h5 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Brand: <span className="text-uppercase">{company}</span>
                                    </h5>
                               </div>
                           </div>
                       </div>
                   );
                }}
            </ProductConsumer>
        )
    }
}

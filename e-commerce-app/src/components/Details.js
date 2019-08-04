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
                               <div className="col-11 mx-auto text-center text-slanted mt-5 mb-3">
                                   <h2>{title}</h2>
                               </div>
                           </div>

                            {/* product info */}
                           <div className="row">
                               <div className="col-10 mx-auto col-md-6 mb-3">
                                    <img src={img} alt="product" className="img-fluid"/>
                               </div>

                               <div className="col-11 mx-auto col-md-6 my-3 text-capitalize">
                                    <h4>model: {title}</h4>
                                    <h6 className="text-title text-uppercase text-muted mt-3 mb-2 fs-20">
                                        Brand: <span className="text-uppercase">{company}</span>
                                    </h6>
                                    <h6 className="text-green3 text-small-xs">
                                        <strong>price: <span>$</span>{price}</strong>
                                    </h6>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0 text-small-xs">
                                        some info about the product:
                                    </p>
                                    <p className="text-muted text-justify">{info}</p>
                                    {/* buttons */}
                                    <div>
                                       <Link to="/">
                                           <ButtonContainer detailsCartBtnBlue>back to products</ButtonContainer>
                                       </Link>
                                       <ButtonContainer 
                                        detailsCartBtnGreen
                                        disabled={inCart ? true : false}
                                        onClick={() => { value.addToCart(id) }}>
                                           {inCart ? 'in Cart' : 'add to cart'}
                                       </ButtonContainer>
                                    </div>
                                    
                               </div>
                           </div>
                       </div>
                   );
                }}
            </ProductConsumer>
        )
    }
}

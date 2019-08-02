import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <h1>Books Store</h1>
        <ProductList />
        <Details />
        <Cart />
        <Default />
      </React.Fragment>
      
    );
  }
}

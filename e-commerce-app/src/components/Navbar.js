import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-success navbar-dark px-sm-5">
                    {/* https://www.iconfinder.com/icons/185072/book_read_streamline_icon */}
                    <Link to="/">
                        <img src={logo} alt="Logo" className="navbar-brand"/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link" style={{color: '#eee'}}>
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto" style={{color: '#ddd'}}>
                        <i className="fas fa-shopping-cart" />
                        my cart
                    </Link>
                </nav>
            </div>
        )
    }
}

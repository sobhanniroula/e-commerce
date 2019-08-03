import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ButtonContainer } from './Button';
import logo from '../logo.svg';


export default class Navbar extends Component {
    render() {
        return (
            <div>
                <NavWrapper className="navbar navbar-expand-md navbar-dark px-sm-5">
                    {/* https://www.iconfinder.com/icons/185072/book_read_streamline_icon */}
                    <Link to="/">
                        <img src={logo} alt="Logo" className="navbar-brand" style={{filter: 'invert(90%)'}}/>
                    </Link>
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item ml-5">
                            <Link to="/" className="nav-link" style={{color: '#eee'}}>
                                Products
                            </Link>
                        </li>
                    </ul>
                    <Link to="/cart" className="ml-auto" style={{color: '#ddd'}}>
                        <ButtonContainer>
                            <span className="mr-2">
                                <i className="fas fa-shopping-cart" />
                            </span>
                            my cart
                        </ButtonContainer>
                    </Link>
                </NavWrapper>
            </div>
        )
    }
}


const NavWrapper = styled.nav`
    background: var(--favouriteGreen);
    .nav-link {
        color: #eee !important;
        font-size: 1.2rem;
        text-transform: capitalize;
    }
`;
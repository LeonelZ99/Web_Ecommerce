import React from 'react';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { SearchBar } from './SearchBar';
import '../styles/nav.css';

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <NavLink to='/' className="navbar-brand" href="#">Carrito</NavLink>
                    </div>
                    <div className="col-md-6">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink to='/' className="nav-link active" aria-current="page" href="#">Compras</NavLink>
                                </li>
                            </ul>
                            <SearchBar />
                            <div className='carrito'>
                                <NavLink to='/carrito'>
                                    <Badge badgeContent={4} color="secondary">
                                        <ShoppingCart color="action" />
                                    </Badge>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
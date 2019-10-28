import React from 'react';
import { Link } from 'react-router-dom';

export { NavbarCustom };

const NavbarCustom: React.FC = () => {

    return (
    <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <Link className="navbar-item" to="/home">
                    Home
                </Link>
                <Link className="navbar-item" to="/products">
                    Products
                </Link>
                <Link className="navbar-item" to="/shopping-cart">
                    Shopping Cart
                </Link>
                <Link className="navbar-item" to="/sales">
                    Sales Charts
                </Link>
            </div>
        </div>
    </nav>
    );
}

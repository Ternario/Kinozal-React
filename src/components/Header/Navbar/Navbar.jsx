import React from 'react';
import './Navbar.scss';
import Menu from './Menu/Menu';
import Info from './Info/Info';

const Navbar = () => {
    return (
        <div className="header-navbar">
            <Menu />
            <Info />
        </div>
    );
}

export default Navbar;
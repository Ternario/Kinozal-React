import React from 'react';
import './Navbar.scss';
import Menu from './Menu/Menu';
import Info from './Info/Info';
import Btn from './Btn/Btn';

const Navbar = () => {
    return (
        <div className="header-navbar">
            <Btn />
            <Menu />
            <Info />
        </div>
    );
}

export default Navbar;
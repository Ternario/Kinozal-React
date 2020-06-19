import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = () => {
    return (
        <div className="header">
            <Logo />
            <Navbar />
        </div>
    );
}

export default Header;
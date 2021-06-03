import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = ({ filterReset }) => {
    return (
        <div className="header">
            <Logo />
            <Navbar filterReset={filterReset} />
        </div>
    );
}

export default Header;
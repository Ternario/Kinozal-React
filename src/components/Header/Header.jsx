import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = ({ onChangePath }) => {
    return (
        <div className="header">
            <Logo />
            <Navbar onChangePath={onChangePath} />
        </div>
    );
}

export default Header;
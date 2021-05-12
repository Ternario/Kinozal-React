import React from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';

const Header = ({changePathSidebar, changePathItems}) => {
    return (
        <div className="header">
            <Logo />
            <Navbar changePathSidebar={changePathSidebar} changePathItems={changePathItems} />
        </div>
    );
}

export default Header;
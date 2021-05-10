import React from 'react';
import Menu from './Menu/Menu';
import SearchPanel from './SearchPanel/SearchPanel';
import Info from './Info/Info';
import Btn from './Btn/Btn';

const Navbar = () => {
    return (
        <div className="header-navbar">
            <Btn />
            <Menu />
            <Info />
            <SearchPanel />
        </div>
    );
}

export default Navbar;
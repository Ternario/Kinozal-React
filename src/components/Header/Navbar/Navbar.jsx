import React from 'react';
import Menu from './Menu/Menu';
import SearchPanel from './SearchPanel/SearchPanel';
import Info from './Info/Info';
import Btn from './Btn/Btn';

const Navbar = ({ onChangePath }) => {
    return (
        <div className="header-navbar">
            <Btn />
            <Menu onChangePath={onChangePath} />
            <Info />
            <SearchPanel />
        </div>
    );
}

export default Navbar;
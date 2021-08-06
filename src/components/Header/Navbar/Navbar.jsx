import React from 'react';
import Menu from './Menu/Menu';
import SearchPanel from './SearchPanel/SearchPanel';
import Info from './Info/Info';
import Btn from './Btn/Btn';

const Navbar = ({ filterReset, name, searchItem, getItems,changeFocus }) => {
    return (
        <div className="header-navbar">
            <Btn />
            <Menu
                filterReset={filterReset}
            />
            <Info />
            <SearchPanel
                name={name}
                searchItem={searchItem}
                getItems={getItems}
                changeFocus={changeFocus}
            />
        </div>
    );
}

export default Navbar;
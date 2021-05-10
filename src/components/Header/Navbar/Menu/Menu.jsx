import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className="header-navbar__menu">
            <Link to="/" className="itemMenu">Main page</Link>
            <Link to="/movies/" className="itemMenu">Movies</Link>
            <Link to="/tv/" className="itemMenu">TV Shows</Link>
        </div>
    );
}

export default Menu;
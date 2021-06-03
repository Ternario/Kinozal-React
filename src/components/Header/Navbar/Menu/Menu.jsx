import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ filterReset }) => {
    return (
        <div className="header-navbar__menu">
            <Link
                to="/"
                className="itemMenu"
                onClick={filterReset}>
                Main page
            </Link>
            <Link
                to="/movie/"
                className="itemMenu"
                onClick={filterReset}>
                Movies
            </Link>
            <Link
                to="/tv/"
                className="itemMenu"
                onClick={filterReset}>
                TV Shows
            </Link>
        </div>
    );
}

export default Menu;
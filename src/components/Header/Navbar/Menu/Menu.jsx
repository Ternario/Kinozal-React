import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ onChangePath }) => {
    return (
        <div className="header-navbar__menu">
            <Link
                to="/"
                className="itemMenu"
                onClick={() => {
                    onChangePath("main", "movie")
                }}>
                Main page
            </Link>
            <Link
                to="/movie/"
                className="itemMenu"
                onClick={() => {
                    onChangePath("movie", "movie")
                }}>
                Movies
            </Link>
            <Link
                to="/tv/"
                className="itemMenu"
                onClick={() => {
                    onChangePath("tv", "tv")
                }}>
                TV Shows
            </Link>
        </div>
    );
}

export default Menu;
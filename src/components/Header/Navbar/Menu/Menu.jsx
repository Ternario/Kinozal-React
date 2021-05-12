import React from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ changePathSidebar,changePathItems }) => {
    return (
        <div className="header-navbar__menu">
            <Link
                to="/"
                className="itemMenu"
                onClick={() => {
                    changePathSidebar("main");
                }}>
                Main page
            </Link>
            <Link
                to="/movies/"
                className="itemMenu"
                onClick={() => {
                    changePathSidebar("movie");
                    changePathItems("movie");
                }}>
                Movies
            </Link>
            <Link
                to="/tv/"
                className="itemMenu"
                onClick={() => {
                    changePathSidebar("tv");
                    changePathItems("tv");
                }}>
                TV Shows
            </Link>
        </div>
    );
}

export default Menu;
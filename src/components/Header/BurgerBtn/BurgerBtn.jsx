import React from 'react';
import { Link } from 'react-router-dom';

const Btn = ({ filterReset, toggleBtn }) => {

    return (
        <div className="header-burgerBtn">
            <Link
                to="/"
                className="itemMenu"
                onClick={() => {
                    filterReset("main");
                    toggleBtn();
                }}
            > Main page </Link>
            <Link
                to="/movie/"
                className="itemMenu"
                onClick={() => {
                    filterReset("movie");
                    toggleBtn();
                }}
            > Movies </Link>
            <Link
                to="/tv/"
                className="itemMenu"
                onClick={() => {
                    filterReset("tv");
                    toggleBtn();
                }}
            > TV Shows </Link>
            <Link
                to="/"
                className="itemMenu"
            >Sign Up</Link>
        </div>
    );

};

export default Btn;
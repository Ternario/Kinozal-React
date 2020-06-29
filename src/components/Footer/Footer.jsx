import React from 'react';
import './Footer.scss';
import List from './List/List';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <List />
                <List />
                <List />
                <List />
            </div>  
        </div>
    );
}

export default Footer;
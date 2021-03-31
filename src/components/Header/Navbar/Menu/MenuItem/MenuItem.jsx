import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = () => {
    return (
        <div className="menu-item">
            <Link to="/" className="itemMenu">Main menu</Link>
            <Link to="/movies/" className="itemMenu">Movies</Link>
            <Link to="/serials/" className="itemMenu">Serials</Link>
        </div>
    );
}

export default MenuItem;
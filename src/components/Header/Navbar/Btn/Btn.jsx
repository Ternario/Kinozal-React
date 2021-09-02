import React from 'react';

const Btn = ({ toggleBtn }) => {
    return (
        <div
            className="header-navbar__btn"
            onClick={toggleBtn}
        >
            <div className="btn-item"></div>
            <div className="btn-item"></div>
            <div className="btn-item"></div>
        </div>
    );
}

export default Btn;
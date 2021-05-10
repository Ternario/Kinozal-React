import React from 'react';

const Rating = ({ title, rating }) => {
    return (
        <div className="content">
            <div className="wrapper-name">
                <div className="wrapper-name__movieName">{title}</div>
            </div>
            <div className="wrapper-rating">
                <div className="wrapper-rating__rating">{rating}</div>
            </div>
        </div>
    );
}

export default Rating;
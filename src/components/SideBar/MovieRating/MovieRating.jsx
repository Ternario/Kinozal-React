import React from 'react';
import Rating from './Rating/Rating';

const MovieRating = ({ratingMovie}) => {

    let elements = ratingMovie.map((item) => {
        return(
            <Rating title={item.title} rating={item.rating}  />
        )
    })

    return (
        <div className="sideBar-movieRating">
            <div className="sideBar-movieRating__label">
                <h3 className="label">Movie ratings</h3>
            </div>
            <div className="sideBar-movieRating__wrapper">
                {elements}
            </div>
        </div>
    );
}

export default MovieRating;


import React from 'react';
import Rating from './Rating/Rating';

const MovieRating = ({ratingMovie}) => {

    const elements = ratingMovie.map(({id, title, rating}) => {
        return(
            <Rating key={id} title={title} rating={rating}  />
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


import React from 'react';

const ItemHeader = () => {
    return (
        <div className="moviesItem-itemHeader">
            <div className="moviesItem-itemHeader__poster">
                <img src="" alt="poster" className="item-poster"/>
            </div>
            <div className="moviesItem-itemHeader__wrapper">
                <div className="item-title"></div>
                <div className="item-year">Year: </div>
                <div className="item-rating">Rating: </div>
                <div className="item-director">Director: </div>
                <div className="item-writer">Writer: </div>
                <div className="item-genres">Genres: </div>
            </div>
        </div>
    );
}

export default ItemHeader;
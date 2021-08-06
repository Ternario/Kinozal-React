import React from 'react';

const ItemHeader = ({ title, poster, date, rating, tagline, genres, runtime, status }) => {

    let genresName = "";

    genres.forEach(({ name }) => {
        genresName += `${name}, `
    })

    genresName = genresName.slice(0, -2)

    const tag = tagline ? <div className="items">
        <div className="item-title">Tagline:</div>
        <div className="item">"{tagline}"</div>
    </div>
        : null;
        
    return (

        <div className="itemDetails-header">
            <h2 className="title">{title}</h2>
            <div className="itemDetails-header__wrapper">
                <div className="item-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" className="poster" />
                </div>
                <div className="items-info">
                    <div className="items">
                        <div className="item-title">Year:</div>
                        <div className="item">{date}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Rating:</div>
                        <div className="item">{rating}</div>
                    </div>
                    {tag}
                    <div className="items">
                        <div className="item-title">Genres:</div>
                        <div className="item">{genresName}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Status:</div>
                        <div className="item">{status}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Runtime:</div>
                        <div className="item">{runtime}min</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ItemHeader;


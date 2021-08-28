import React from 'react';

const Person = ({ person: { name, profilePath, birthday, deathday, placeOfBirth, imdbId, popularity, biography } }) => {

    return (
        <div className="itemDetails-itemPersonDetails__person" >
            <h2 className="title">{name}</h2>
            <div className="person-data">
                <div className="person-data__poster">
                    <img
                        className="poster"
                        src={`https://image.tmdb.org/t/p/w500${profilePath}`}
                        alt="poster"
                    />
                </div>
                <div className="person-data__wrapper">
                    <div className="items">
                        <div className="item-title">Imdb Id:</div>
                        <div className="item">{imdbId === null ? "no information" : imdbId}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Popularity:</div>
                        <div className="item">{popularity === null ? "no information" : popularity}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Birthday:</div>
                        <div className="item">{birthday === null ? "no information" : birthday}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Deathday:</div>
                        <div className="item">{deathday === null ? "no information" : deathday}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Place Of Birth:</div>
                        <div className="item">{placeOfBirth === null ? "no information" : placeOfBirth}</div>
                    </div>
                </div>
            </div>
            <div className="person-biography">
                <h2 className="title">Biography:</h2>
                <div className="description">{biography === "" ? "no information" : biography}</div>
            </div>
        </div>
    );
};

export default Person;
import React from 'react';

const SectionMovies = ({poster, title}) => {

    return (
        <div className="movies-newMovies__wrapper">
            <div className="sectionMovies-poster">
                <img src={poster} alt="section"/>
            </div>
            <div className="sectionMovies-name">
                <div className="movie-name">{title}</div>
            </div>
        </div>
    );
}

export default SectionMovies;

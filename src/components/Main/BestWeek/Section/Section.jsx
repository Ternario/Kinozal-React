import React from 'react';

const Section = ({poster, title}) => {

    return (
        <div className="section">
            <div className="section-poster">
                <img src={poster} alt="section"/>
            </div>
            <div className="section-name">
                <div className="movie-name">{title}</div>
            </div>
        </div>
    );
}

export default Section;

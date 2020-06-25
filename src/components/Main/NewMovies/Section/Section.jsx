import React from 'react';

const Section = ({image}) => {
    return (
        <div className="section">
            <div className="section-poster">
                <img src={image} alt="section"/>
            </div>
            <div className="section-name">
                <div className="movie-name"></div>
            </div>
            
        </div>
    );
}

export default Section;

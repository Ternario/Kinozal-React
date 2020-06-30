import React from 'react';

const SectionSerials = ({poster, title}) => {

    return (
        <div className="serials-newSerials__wrapper">
            <div className="sectionSerials-poster">
                <img src={poster} alt="section"/>
            </div>
            <div className="sectionSerials-name">
                <div className="movie-name">{title}</div>
            </div>
        </div>
    );
}

export default SectionSerials;
import React from 'react';
import Section from './Section/Section';


const NewMovies = () => {


    return (
        <div className="main-newMovies">
            <div className="main-newMovies__label">
                <h1 className="label">New movies</h1>
            </div>
            <div className="main-newMovies__wrapper">
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
                <Section />
            </div>
        </div>
    );
}

export default NewMovies;




import React from 'react';
import './Main.scss';
import NewMovies from './NewMovies/NewMovies';
import BestWeek from './BestWeek/BestWeek';
import MovieNews from './MovieNews/MovieNews';


const Main = () => {


        return (
            <div className="main">
                <NewMovies  />
                <BestWeek />
                <MovieNews />
            </div>
        );

    
}

export default Main;
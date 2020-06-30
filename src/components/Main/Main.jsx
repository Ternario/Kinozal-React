import React from 'react';
import './Main.scss';
import NewMovies from './NewMovies/NewMovies';
import BestWeek from './BestWeek/BestWeek';
import MovieNews from './MovieNews/MovieNews';


const Main = ({movieNews}) => {
    return (
        <div className="main">
            <NewMovies  />
            <BestWeek />
            <MovieNews movieNews={movieNews} />
        </div>
    );
}

export default Main;
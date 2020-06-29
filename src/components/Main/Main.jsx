import React from 'react';
import './Main.scss';
import NewMovies from './NewMovies/NewMovies';
import BestWeek from './BestWeek/BestWeek';
import MovieNews from './MovieNews/MovieNews';
import SiteNews from '../SideBar/SiteNews/SiteNews';
import MovieRating from '../SideBar/MovieRating/MovieRating';


const Main = ({movieNews, dataNews, ratingMovie}) => {
    return (
        <div className="main">
            <NewMovies  />
            <BestWeek />
            <MovieNews movieNews={movieNews} />
            <SiteNews dataNews={dataNews} />
            <MovieRating ratingMovie={ratingMovie} />
        </div>
    );
}

export default Main;
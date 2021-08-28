import React from 'react';
import './MainSideBar.scss'
import PostSlider from './PostSlider/PostSlider';
import SiteNews from './SiteNews/SiteNews';
import MovieRating from './MovieRating/MovieRating';

const MainSideBar = ({ dataNews, ratingMovie }) => {
    return (
        <div className="mainSideBar">
            <PostSlider />
            <SiteNews dataNews={dataNews} />
            <MovieRating ratingMovie={ratingMovie} />
        </div>
    );
};

export default MainSideBar;
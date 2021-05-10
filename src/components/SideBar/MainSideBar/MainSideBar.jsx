import React from 'react';
import PostSlider from './PostSlider/PostSlider';
import SiteNews from './SiteNews/SiteNews';
import MovieRating from './MovieRating/MovieRating';

const MainSideBar = ({ dataNews, ratingMovie }) => {
    return (
        <div className="sideBar-MainSideBar">
            <PostSlider />
            {/* <Authorization autorization={autorization} /> */}
            <SiteNews dataNews={dataNews} />
            <MovieRating ratingMovie={ratingMovie} />
        </div>
    );
};

export default MainSideBar;
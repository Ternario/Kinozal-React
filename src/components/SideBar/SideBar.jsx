import React from 'react';
import './SideBar.scss';
import PostSlider from './PostSlider/PostSlider';
import SearchPanel from './SearchPanel/SearchPanel';
import Authorization from './Authorization/Authorization';
import SiteNews from './SiteNews/SiteNews';
import MovieRating from './MovieRating/MovieRating';

const SideBar = ({dataNews, ratingMovie}) => {

    return (
        <div className="sideBar">
            <PostSlider />
            <SearchPanel />
            <Authorization />
            <SiteNews dataNews={dataNews} />
            <MovieRating ratingMovie={ratingMovie} />
        </div>
    );
}

export default SideBar;
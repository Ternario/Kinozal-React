import React from 'react';
import './SideBar.scss';
import PostSlider from './PostSlider/PostSlider';
import SearchPanel from './SearchPanel/SearchPanel';
import Authorization from './Authorization/Authorization';
import SiteNews from './SiteNews/SiteNews';
import MovieRating from './MovieRating/MovieRating';


const SideBar = () => {
    return (
        <div className="sideBar">
            <PostSlider />
            <SearchPanel />
            <Authorization />
            <SiteNews />
            <MovieRating />
        </div>
    );
}

export default SideBar;
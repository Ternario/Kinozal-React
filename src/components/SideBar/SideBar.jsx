import React from 'react';
import './SideBar.scss';
import PostSlider from './PostSlider/PostSlider';
import SearchPanel from './SearchPanel/SearchPanel';
import SignUp from './SignUp/SignUp';
import SiteNews from './SiteNews/SiteNews';
import MovieRating from './MovieRating/MovieRating';

const SideBar = () => {
    return (
        <div className="sideBar">
            <PostSlider />
            <SearchPanel />
            <SignUp />
            <SiteNews />
            <MovieRating />
        </div>
    );
}

export default SideBar;
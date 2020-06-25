import React from 'react';
import './SideBar.scss';
import PostSlider from './PostSlider/PostSlider';
import SearchPanel from './SearchPanel/SearchPanel';
import Authorization from './Authorization/Authorization';
import SiteNews from './SiteNews/SiteNews';
import MovieRating from './MovieRating/MovieRating';
import image from './../../img/75x75.png'


const SideBar = () => {

    const dataNews = [
        {image: image, title: "We launched a new service - KinoMonster", date: "April 27, 2019"},
        {image: image, title: "New functionality added to the site", date: "August 15, 2019"},
        {image: image, title: "Increased movie download speed", date: "August 20, 2019"},
        {image: image, title: "Optimized Server Performance", date: "September 15, 2019"},
        {image: image, title: "The number of users exceeded 10,000", date: "October 5, 2019"}
    ];

    const ratingMovie = [
        {title: "Pierrot le fou", rating: 9.8},
        {title: "How I Met Your Mother", rating: 9.6},
        {title: "Friends", rating: 9.3},
        {title: "Otto e mezzo", rating: 8.8},
        {title: "Pierrot le fou", rating: 8.4},
    ];

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
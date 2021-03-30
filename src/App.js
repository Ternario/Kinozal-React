import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import Items from './components/Items/Items';
import MovieRating from './components/SideBar/MovieRating/MovieRating';
import SiteNews from './components/SideBar/SiteNews/SiteNews';
import ItemDetails from './components/ItemDetails/ItemDetails';

import { BrowserRouter as Router, Route } from "react-router-dom";

import image from './img/75x75.png';
import news1 from './img/news-1.jpg';
import news2 from './img/news-2.jpg';
import news3 from './img/news-3.jpg';

export default class App extends Component {

    state = {
        dataNews: [
            { id: 1, image: image, title: "We launched a new service - KinoMonster", date: "April 27, 2019" },
            { id: 2, image: image, title: "New functionality added to the site", date: "August 15, 2019" },
            { id: 3, image: image, title: "Increased movie download speed", date: "August 20, 2019" },
            { id: 4, image: image, title: "Optimized Server Performance", date: "September 15, 2019" },
            { id: 5, image: image, title: "The number of users exceeded 10,000", date: "October 5, 2019" }
        ],
        ratingMovie: [
            { id: 1, title: "Pierrot le fou", rating: 9.8 },
            { id: 2, title: "How I Met Your Mother", rating: 9.6 },
            { id: 3, title: "Friends", rating: 9.3 },
            { id: 4, title: "Otto e mezzo", rating: 8.8 },
            { id: 5, title: "Pierrot le fou", rating: 8.4 },
        ],
        movieNews: [
            { id: 1, image: news1, title: "Kate Beckinsale introduced the film “Another World: Bloody Wars”", content: "Kate Beckinsale introduced in Mexico her new film, “Another World”: The Bloody Wars. On the red carpet, the actress posed for photographers in a luxurious red dress. The film will be dedicated to Selena - the vampire warrior Selena will enter her last and decisive battle between the werewolves and the vampire clan that betrayed her. In Ukrainian cinemas, the picture can be seen from December 1 ..." },
            { id: 2, image: news2, title: "Critics of New York chose the best film of 2016'", content: "They became the musical La La Land, directed by Damien Chazell. Casey Affleck, who starred in Manchester by the Sea, was voted Best Actor of the Year, and Isabelle Happert in the lead role in She, was awarded a victory in a similar female category. Michelle Williams, who played in the drama “Some Women” was named the best supporting actress, and Mahershalalhashbaz Ali for the role in the movie “Moonlight” was named the best supporting actor ..." },
            { id: 3, image: news3, title: "Chris Pratt and Jennifer Lawrence present Passengers in Paris", content: "Although almost a month remains before the premiere of “Passengers”, an advertising tour in support of the new film has already begun: Chris Pratt and Jennifer Lawrence, who starred in the film, presented “Passengers” as part of a photo call in Paris. In the cinema “Passengers” will appear at the end of 2016 - December 22 ..." }
        ],
    }

    render() {

        const { dataNews, ratingMovie, movieNews } = this.state;

        return (
            <Router>
                <div className="app">
                    <Header />
                    <div className="container">
                        <SideBar dataNews={dataNews} ratingMovie={ratingMovie} />
                        <Route path="/" exact component={() =>
                            <Main movieNews={movieNews} />
                        } />
                        {/* <Route path="/serials" exact component={Items}/> */}
                        <Route path="/movies" exact component={Items} />
                        <Route path="/movies/:id" render={
                            ({ match }) => {
                                const { id } = match.params;

                                return <ItemDetails itemId={id} />
                            }
                        } />
                        <SiteNews dataNews={dataNews} />
                        <MovieRating ratingMovie={ratingMovie} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

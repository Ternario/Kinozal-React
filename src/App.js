import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import ItemsWrapper from './components/ItemsWrapper/ItemsWrapper';
import SideBar from './components/SideBar/SideBar';
import Footer from './components/Footer/Footer';
import ItemDetails from './components/ItemDetails/ItemDetails';

import MoviesData from './Service/Service';

import { BrowserRouter as Router, Route } from "react-router-dom";

import image from './img/75x75.png';
import news1 from './img/news-1.jpg';
import news2 from './img/news-2.jpg';
import news3 from './img/news-3.jpg';


export default class App extends Component {

    service = new MoviesData();

    state = {
        sideBar: "movie",
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
            { id: 5, title: "Pierrot le fou", rating: 8.4 }
        ],
        movieNews: [
            { id: 1, image: news1, title: "Kate Beckinsale introduced the film “Another World: Bloody Wars”", content: "Kate Beckinsale introduced in Mexico her new film, “Another World”: The Bloody Wars. On the red carpet, the actress posed for photographers in a luxurious red dress. The film will be dedicated to Selena - the vampire warrior Selena will enter her last and decisive battle between the werewolves and the vampire clan that betrayed her. In Ukrainian cinemas, the picture can be seen from December 1 ..." },
            { id: 2, image: news2, title: "Critics of New York chose the best film of 2016'", content: "They became the musical La La Land, directed by Damien Chazell. Casey Affleck, who starred in Manchester by the Sea, was voted Best Actor of the Year, and Isabelle Happert in the lead role in She, was awarded a victory in a similar female category. Michelle Williams, who played in the drama “Some Women” was named the best supporting actress, and Mahershalalhashbaz Ali for the role in the movie “Moonlight” was named the best supporting actor ..." },
            { id: 3, image: news3, title: "Chris Pratt and Jennifer Lawrence present Passengers in Paris", content: "Although almost a month remains before the premiere of “Passengers”, an advertising tour in support of the new film has already begun: Chris Pratt and Jennifer Lawrence, who starred in the film, presented “Passengers” as part of a photo call in Paris. In the cinema “Passengers” will appear at the end of 2016 - December 22 ..." }
        ],
        comments: [
            { id: 158321, profile: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=170667a&w=0&h=7XdJ-qzwSni92-B7nN6TlRF_u8d50RcA8adlGKLIDYc=", name: "Georgiy", date: "25.03.2021, 09:21:45", comment: "A very unusual film, it seemed to me. But attention riveted inside and out. Sometimes funny, sometimes sad, sometimes disgusting. But on the whole, a picture is created of something not standard, something in the creation of which they put their heart and soul into it. And so after all, you cannot immediately understand what the story is about. About love ? About a weird girl? Or how sometimes, while helping everyone and everyone, you forget about an equally important person - yourself. And this actress, damn it, she looks great, plays great from her, you just can't take your eyes off)" },
            { id: 274856, profile: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=170667a&w=0&h=7XdJ-qzwSni92-B7nN6TlRF_u8d50RcA8adlGKLIDYc=", name: "Serg_Frost", date: "22.03.2021, 18:18:12", comment: "I love this show. Its chic tube atmosphere and really legendary humor. And I'm even glad that I got on him at a time when I was still waiting for several seasons, from this he is even more dear and beloved. Forever I fell in love with these characters and their actors)). And never give up, even if you're late" },
            { id: 317853, profile: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=170667a&w=0&h=7XdJ-qzwSni92-B7nN6TlRF_u8d50RcA8adlGKLIDYc=", name: "Harlan", date: "21.03.2021, 15:45:33", comment: "Love for life!) I can look for days and I know by heart) In the most difficult times thisfilm were there! And during partings, and crisis, illness, quarantine, and when real friends betrayed! Turn on - and warmth in your soul! I have been watching the series since my school days, the best voice acting for me is Ukrainian! I advise everyone" }
        ]
    }

    deliteComment = (id) => {
        this.setState(({ comments }) => {

            const index = comments.findIndex((item) => {
                return item.id === id;
            });

            const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];

            return {
                comments: newComments
            }
        });
    }

    getNumber() {
        const min = Math.ceil(10000);
        const max = Math.floor(999999);

        return Math.floor(Math.random() * (max - min)) + min;
    }

    getUnicId(getNumber) {
        const { comments } = this.state;

        const randomNumber = getNumber();

        const flag = comments.some((item) => {
            return item.id === randomNumber;
        })

        return flag ? this.getUnicId(this.getNumber) : randomNumber;
    }

    addComment = (name, date, comment) => {
        const id = this.getUnicId(this.getNumber);

        const newItem = {
            id: id,
            profile: "https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=170667a&w=0&h=7XdJ-qzwSni92-B7nN6TlRF_u8d50RcA8adlGKLIDYc=",
            name: name,
            date: date,
            comment: comment
        }

        this.setState(({ comments }) => {
            const newArr = [...comments, newItem];

            return {
                comments: newArr
            }
        });
    }

    render() {

        const { sideBar, dataNews, ratingMovie, movieNews, comments } = this.state;

        return (
            <Router>
                <div className="app">
                    <Header />
                    <div className="container">
                        <SideBar getGenresList={this.service.getGenresList} sideBar={sideBar} dataNews={dataNews} ratingMovie={ratingMovie} autorization={this.autorization} />

                        <Route path="/" exact component={() =>
                            <Main
                                type={"movie"}
                                getNewMovies={this.service.getNewMovies}
                                getTopMovies={this.service.getTopMovies}
                                movieNews={movieNews}
                            />
                        } />

                        <Route path="/movies" exact component={() =>
                            <ItemsWrapper
                                title={"Movies"}
                                type={"movie"}
                                getData={this.service.getItems}
                            />
                        } />

                        <Route path="/tv" exact component={() =>
                            <ItemsWrapper
                                title={"Tv Shows"}
                                type={"tv"}
                                getData={this.service.getItems}
                            />
                        } />

                        <Route path={"/:type/:id"} render={
                            ({ match }) => {
                                const { id, type } = match.params;

                                return <ItemDetails
                                    itemId={id}
                                    type={type}
                                    comments={comments}
                                    getData={this.service.getItemById}
                                    getVideoData={this.service.getItemMovieById}
                                    onDeliteComment={this.deliteComment}
                                    onAddComment={this.addComment}
                                />
                            }
                        } />


                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

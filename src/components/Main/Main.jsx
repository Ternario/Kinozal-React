import React from 'react';
import './Main.scss';
import NewMovies from './NewMovies/NewMovies';
import BestWeek from './BestWeek/BestWeek';
import MovieNews from './MovieNews/MovieNews';
import news1 from '../../img/news-1.jpg';
import news2 from '../../img/news-2.jpg';
import news3 from '../../img/news-3.jpg';

const Main = () => {

    const movieNews = [
        {id: 1, image: news1, title: "Kate Beckinsale introduced the film “Another World: Bloody Wars”", content: "Kate Beckinsale introduced in Mexico her new film, “Another World”: The Bloody Wars. On the red carpet, the actress posed for photographers in a luxurious red dress. The film will be dedicated to Selena - the vampire warrior Selena will enter her last and decisive battle between the werewolves and the vampire clan that betrayed her. In Ukrainian cinemas, the picture can be seen from December 1 ..."},
        {id: 2, image: news2, title: "Critics of New York chose the best film of 2016'", content: "They became the musical La La Land, directed by Damien Chazell. Casey Affleck, who starred in Manchester by the Sea, was voted Best Actor of the Year, and Isabelle Happert in the lead role in She, was awarded a victory in a similar female category. Michelle Williams, who played in the drama “Some Women” was named the best supporting actress, and Mahershalalhashbaz Ali for the role in the movie “Moonlight” was named the best supporting actor ..."},
        {id: 3, image: news3, title: "Chris Pratt and Jennifer Lawrence present Passengers in Paris", content: "Although almost a month remains before the premiere of “Passengers”, an advertising tour in support of the new film has already begun: Chris Pratt and Jennifer Lawrence, who starred in the film, presented “Passengers” as part of a photo call in Paris. In the cinema “Passengers” will appear at the end of 2016 - December 22 ..."}
    ]

    return (
        <div className="main">
            <NewMovies  />
            <BestWeek />
            <MovieNews movieNews={movieNews} />
        </div>
    );
}

export default Main;
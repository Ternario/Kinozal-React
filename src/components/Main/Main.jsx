import React, {Component} from 'react';
import './Main.scss';
// import NewMovies from './NewMovies/NewMovies';
import BestWeek from './BestWeek/BestWeek';
import MovieNews from './MovieNews/MovieNews';
import Items from '../Items/Items';

export default class Main extends Component{


    render() {

        const {getData} = this.props

        return (
            <div className="main">
                {/* <NewMovies  getData={getData} /> */}
                <Items getData={getData} />
                <BestWeek />
                <MovieNews movieNews={this.props.movieNews} />
            </div>
        );
    }
}
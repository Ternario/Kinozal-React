import React, {Component} from 'react';
import './Main.scss';
import Items from '../Items/Items'
// import NewMovies from './NewMovies/NewMovies';
// import BestWeek from './BestWeek/BestWeek';
import MovieNews from './MovieNews/MovieNews';
import MoviesData from '../../Service/Service';

export default class Main extends Component{

    service = new MoviesData()

    render() {
        return (
            <div className="main">
                <Items title={"New movies"}  getData={this.service.getAll} />
                <Items title={"TOP of the week"}  getData={this.service.getAll} />
                {/* <NewMovies  />
                <BestWeek /> */}
                <MovieNews movieNews={this.props.movieNews} />
            </div>
        );
    }
}
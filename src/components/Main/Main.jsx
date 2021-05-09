import React, { Component } from 'react';
import './Main.scss';
import MovieNews from './MovieNews/MovieNews';
import Items from '../Items/Items';

export default class Main extends Component {

    render() {
        const { type, getNewMovies, getTopMovies } = this.props;

        return (
            <div className="main">

                <div className="sectionWrapper">
                    <div className="sectionWrapper-label">
                        <h2 className="label-new">New Movies</h2>
                    </div>
                    <div className="sectionWrapper-items">
                        <Items type={type} getData={getNewMovies} />

                    </div>
                </div>

                <div className="sectionWrapper">
                    <div className="sectionWrapper-label">
                        <h2 className="label-top">TOP Movies</h2>
                    </div>
                    <div className="sectionWrapper-items">
                        <Items type={type} getData={getTopMovies} />
                    </div>
                </div>

                <MovieNews movieNews={this.props.movieNews} />
            </div>
        );
    }
}
import React, { Component } from 'react';
import './Main.scss';
import MovieNews from './MovieNews/MovieNews';
import Items from '../Items/Items';

export default class Main extends Component {

    render() {
        const { getData } = this.props

        return (
            <div className="main">

                <div className="main-newMovies">
                    <div className="main-newMovies__label">
                        <h1 className="label">New Movies</h1>
                    </div>
                    <div className="main-newMovies__wrapper">
                        <Items getData={getData} />

                    </div>
                </div>

                <div className="main-bestWeek">
                    <div className="main-bestWeek__label">
                        <h2 className="label">TOP of the week</h2>
                    </div>
                    <div className="main-bestWeek__wrapper">
                        <Items getData={getData} />
                    </div>
                </div>

                <MovieNews movieNews={this.props.movieNews} />
            </div>
        );
    }
}
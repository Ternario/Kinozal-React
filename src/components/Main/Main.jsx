import React, { Component } from 'react';
import './Main.scss';
import MovieNews from './MovieNews/MovieNews';
import Items from '../Items/Items';
import MainSideBar from './MainSideBar/MainSideBar';

export default class Main extends Component {

    state = {
        type: "movie",
        results: null
    }

    componentDidMount() {

        this.getMovies();
    };

    getMovies() {
        const { getNewMovies } = this.props;

        getNewMovies()
            .then((results) => {
                this.setState({
                    results
                })
            })
    };

    render() {
        const { type, results } = this.state;

        const { filters, isShowSideBar, dataNews, ratingMovie } = this.props;

        if(!results) {
            return <div>Loading...</div>
        }

        return (
            <>
                <MainSideBar dataNews={dataNews} ratingMovie={ratingMovie} />

                <div className="main">

                    <div className="sectionWrapper">
                        <div className="sectionWrapper-label">
                            <h2 className="label-new">New Movies</h2>
                        </div>
                        <div className="sectionWrapper-items">
                            <Items
                                filters={filters}
                                isShowSideBar={isShowSideBar}
                                results={results}
                                type={type}
                            />
                        </div>
                    </div>

                    <MovieNews movieNews={this.props.movieNews} />
                </div>
            </>
        );
    }
}
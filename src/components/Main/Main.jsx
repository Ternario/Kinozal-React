import React, { Component } from 'react';
import './Main.scss';
import MovieNews from './MovieNews/MovieNews';
import Items from '../Items/Items';

export default class Main extends Component {

    // componentDidMount() {
    //     if (this.props.sideBarPath === null || this.props.sideBarPath !== this.props.type) {
    //         this.props.getGenresData(this.props.type);
    //     };
    // };

    render() {
        const { filters, getNewMovies, type } = this.props;

        return (
            <div className="main">

                <div className="sectionWrapper">
                    <div className="sectionWrapper-label">
                        <h2 className="label-new">New Movies</h2>
                    </div>
                    <div className="sectionWrapper-items">
                        <Items filters={filters} getData={getNewMovies} type={type} />

                    </div>
                </div>

                <MovieNews movieNews={this.props.movieNews} />
            </div>
        );
    }
}
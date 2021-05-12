import React, { Component } from 'react';

export default class Section extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps) {
        if (this.props.filters.sort_by !== prevProps.filters.sort_by &&
            this.props.filters.releaseYear !== prevProps.filters.releaseYear) {
            this.getMovies();
        }
    }

    getMovies() {
        const { getData, filters: { page, releaseYear, sort_by, genres } } = this.props;

        getData(page, releaseYear, sort_by, genres)
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });


    }

    renderItems = (arr) => {
        return arr.map(({ id, poster, title, date, rating }) => {
            return (
                <div key={id} className="section"
                    onClick={() => {
                        this.props.onItemSelected(id, title)
                    }} >
                    <div className="section-poster">
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="section" />
                    </div>
                    <div className="section-info">
                        <div className="name">{title}</div>
                        <div className="date">Release date: {date}</div>
                        <div className="section-info__rating">
                            <div className="title">Rating:</div>
                            <div className="number">{rating}</div>
                        </div>

                    </div>
                </div>
            )
        });
    };

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>loading...</div>
        }

        const items = this.renderItems(itemList);

        return (
            <>
                {items}
            </>
        );
    }
}
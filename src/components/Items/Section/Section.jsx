import React, { Component } from 'react';

export default class Section extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title) {
            this.getMovies();
        }
    }

    getMovies() {
        const { type, getData } = this.props;

        getData(type)
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
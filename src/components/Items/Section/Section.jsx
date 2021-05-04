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
        const { getData } = this.props;

        getData()
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
                        this.props.onItemSelected("movies", id, title)
                    }} >
                    <div className="section-poster">
                        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="section" />
                    </div>
                    <div className="section-name">
                        <div className="name">{title}</div>
                        <div className="date" >{date}</div>
                        <div className="section-name__rating">
                            <div className="rating-title">Rating:</div>
                            <div className="rating-number">{rating}</div>
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
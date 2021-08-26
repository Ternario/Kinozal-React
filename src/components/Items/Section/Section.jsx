import React, { Component } from 'react';

export default class Section extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {

        this.getMovies();
    };

    componentDidUpdate(prevProps) {
        if (this.props.results !== prevProps.results) {
            this.getMovies()
        };
    };

    getMovies() {
        const { results } = this.props;

        this.setState({
            itemList: results
        });
    };

    renderItems = (arr) => {

        const { type, onItemSelected } = this.props;

        return arr.map(({ id, poster, title, date, rating, itemsType }) => {

            const itemType = itemsType === undefined ? type : itemsType;

            return (
                <div key={id} className="section"
                    onClick={() => {
                        onItemSelected(itemType, id, title)
                    }} >
                    <div className="section-poster">
                        <img className="poster" src={`https://image.tmdb.org/t/p/w500${poster}`} alt="section" />
                    </div>
                    <div className="section-info">
                        <div className="name">{title}</div>
                        <div className="date">{date}</div>
                        <div className="section-info__rating">
                            <div className="rating">Rating:</div>
                            <div className="number">{rating}</div>
                        </div>

                    </div>
                </div>
            );
        });
    };

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>loading...</div>
        };

        const items = this.renderItems(itemList);

        return (
            <>
                {items}
            </>
        );
    };
};
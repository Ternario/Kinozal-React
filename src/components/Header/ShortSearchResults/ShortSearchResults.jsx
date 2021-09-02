import React, { Component } from 'react';
import './../Header.scss';

export default class ShortSearchResults extends Component {

    state = {
        results: null,
        totalResults: null
    }

    componentDidMount() {
        this.getData();
    };

    componentDidUpdate(prevProps) {
        if (this.props.results !== prevProps.results) {
            this.getData();
        };
    };

    getData() {
        const { results, totalResults } = this.props;

        this.setState({
            results,
            totalResults
        });
    };

    renderFilter = (items, event) => {
        return items.slice(0, 5).map(({ id, title, rating, itemsType }) => {

            const itemRating = rating ?
                <div className="item">{rating}, </div>
                :
                null;

            return <div
                key={id}
                className="header-ShortSearchResults__items"
                onClick={() => {
                    event(itemsType, id, title)
                }}
            >
                <div className="item">{title},</div>
                {itemRating}
                <div className="item">{itemsType}</div>
            </div>
        });
    };

    render() {
        const { results, totalResults } = this.state;

        const { getItems, showCurrentItem, showShortSearch } = this.props;

        if (!results) {
            return null
        };

        const items = this.renderFilter(results, showCurrentItem);

        const isShow = showShortSearch ? "" : "toggleShow";

        const itemBtn = results.length > 5 ?
            <div
                className="header-ShortSearchResults__itemBtn"
                onClick={getItems}
            >
                See all results ( {totalResults} )</div>
            :
            null;

        return (
            <div className={`header-ShortSearchResults ${isShow}`} >
                {items}
                {itemBtn}
            </div>
        );
    };
};
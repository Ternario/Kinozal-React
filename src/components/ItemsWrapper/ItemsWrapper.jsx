import React, { Component } from 'react';
import Items from '../Items/Items';
import './ItemsWrapper.scss';

export default class ItemsWrapper extends Component {

    state = {
        items: {}
    };

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps) {
        if (this.props.filters !== prevProps.filters) {
            this.getMovies();
        };
    };

    getMovies() {
        const { getData, type, page, filters: { releaseYear, sort_by, genres } } = this.props;

        if (type !== "main") {
            getData(page, releaseYear, sort_by, genres)
                .then((items) => {
                    this.setState({
                        items
                    })
                });
        };
    };

    render() {

        const { items: { totalPages, results } } = this.state;

        if (!totalPages && !results) {
            return <div>Loading...</div>
        };

        const { page, filters, type, title, isShowSideBar, changeCurrentPage } = this.props;

        return (
            <div className="sectionWrapper">
                <div className="sectionWrapper-label">
                    <h2 className="label" >{title}</h2>
                </div>
                <div className="sectionWrapper-items">
                    <Items
                        type={type}
                        page={page}
                        filters={filters}
                        isShowSideBar={isShowSideBar}
                        results={results}
                    />
                </div>
                <div className="sectionWrapper-pagination">
                    <button className="sectionWrapper-pagination__btn"
                        onClick={() => {
                            changeCurrentPage("prev");
                        }} >Prev</button>
                    <div className="currentPage">{page} of {totalPages}</div>
                    <button className="sectionWrapper-pagination__btn"
                        onClick={() => {
                            changeCurrentPage("next", totalPages);
                        }} >Next</button>
                </div>
            </div>
        );
    };
};


import React, { Component } from 'react';
import Items from '../Items/Items';
import '../SearchItemsWrapper/SearchItemsWrapper.scss'

export default class SearchItemsWrapper extends Component {

    state = {
        items: {}
    }

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title || this.props.page !== prevProps.page) {
            this.getMovies();
        };
    };

    getMovies() {
        const { getData, title, page } = this.props;

        this.props.isShowSideBar(false)

        getData(title, page)
            .then((items) => {
                this.setState({
                    items
                })
            })
    };

    componentWillUnmount() {
        this.props.isShowSideBar(true)
    };

    render() {

        const { items: { totalPages, results } } = this.state;


        if (!totalPages && !results) {
            return <div>Loading...</div>
        };

        const { page, filters, title, isShowSideBar, changeCurrentPage } = this.props;

        return (
            <div className="searchSection">
                <div className="searchSection-label">
                    <h2 className="label">{title}</h2>
                </div>
                <div className="searchSection-items">
                    <Items
                        type={title}
                        page={page}
                        filters={filters}
                        isShowSideBar={isShowSideBar}
                        results={results}
                    />
                </div>
                <div className="searchSection-pagination">
                    <button className="searchSection-pagination__btn"
                        onClick={() => {
                            changeCurrentPage("prev")
                        }} >Prev</button>
                    <div className="currentPage">{page} of {totalPages}</div>
                    <button className="searchSection-pagination__btn"
                        onClick={() => {
                            changeCurrentPage("next")
                        }} >Next</button>
                </div>
            </div>
        );
    };
};


import React, { Component } from 'react';
import Items from '../../../../Items/Items';


export default class PersonVidoe extends Component {

    state = {
        items: null,
        currentItems: null,
        totalPages: null,
        currentPage: 1,
    };

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.getMovies()
        };

        if (this.state.items !== prevState.items || this.state.currentPage !== prevState.currentPage) {
            this.paginate()
        };
    };

    getMovies() {
        const { items } = this.props;

        this.setState({
            items
        });
    };

    paginate = () => {
        const { items, currentPage } = this.state;

        const offset = 10 * (currentPage - 1);
        const totalPages = Math.ceil(items.length / 10);
        const paginatedItems = items.slice(offset, 10 * currentPage);

        this.setState({
            totalPages,
            currentItems: paginatedItems
        });
    };

    togglePage = (item) => {
        const { currentPage, totalPages } = this.state;

        if (item === "next" && currentPage < totalPages) {
            const newPage = currentPage + 1;

            this.setState({
                currentPage: newPage
            });

        } else if (item === "prev" && currentPage > 1) {
            const newPage = currentPage - 1;

            this.setState({
                currentPage: newPage
            });
        };
    };

    render() {
        const { currentItems, totalPages, currentPage } = this.state;

        if (!currentItems) {
            return <div>Loading...</div>
        };

        return (
            <div className="personVideo">
                <div className="personItems-wrapper">
                    <Items results={currentItems} />
                </div>
                <div className="personVideo-btn">
                    <button className="btn"
                        onClick={() => {
                            this.togglePage("prev")
                        }} >Prev</button>
                    <div className="currentPage">{currentPage} of {totalPages}</div>
                    <button className="btn"
                        onClick={() => {
                            this.togglePage("next")
                        }} >Next</button>
                </div>
            </div>
        );
    };
};
import React, { Component } from 'react';
import FilterGenres from './FilterGenres/FilterGenres';
import ReleaseYear from './ReleaseYear/ReleaseYear';
import SortBy from './SortBy/SortBy';

export default class FilterSideBar extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        this.getDate();
    };

    componentDidUpdate(prevProps) {
        if (this.props.sideBar !== prevProps.sideBar) {
            this.getDate();
        };
    };

    getDate() {
        const { getGenresList, sideBar } = this.props;

        getGenresList(sideBar)
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    };

    render() {

        const { itemList } = this.state;

        const { filters, onChangeFilters, onChangeGenres } = this.props;

        if (!itemList) {
            return <div>Loading...</div>;
        };

        return (
            <div className="sideBar-FilterSideBar">
                <SortBy filters={filters} onChangeFilters={onChangeFilters} />
                <ReleaseYear filters={filters} onChangeFilters={onChangeFilters} />
                <FilterGenres itemList={itemList} onChangeGenres={onChangeGenres} />
            </div>
        );
    };
};

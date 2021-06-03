import React, { Component } from 'react';
import FilterGenres from './FilterGenres/FilterGenres';
import ReleaseYear from './ReleaseYear/ReleaseYear';
import SortBy from './SortBy/SortBy';

export default class FilterSideBar extends Component {

    render() {

        const { genresList, filters, onChangeFilters, checkSwitcher } = this.props;

        if (!genresList) {
            return <div>Loading...</div>;
        };

        return (
            <div className="sideBar-FilterSideBar">
                <SortBy
                    filters={filters}
                    onChangeFilters={onChangeFilters}
                />
                <ReleaseYear
                    filters={filters}
                    onChangeFilters={onChangeFilters}
                />
                <FilterGenres
                    genresList={genresList}
                    checkSwitcher={checkSwitcher}
                />
            </div>
        );
    };
};

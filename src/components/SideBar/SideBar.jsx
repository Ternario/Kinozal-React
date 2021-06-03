import React, { Component } from 'react';
import './SideBar.scss';
import MainSideBar from './MainSideBar/MainSideBar'
import FilterSideBar from './FiltersSideBar/FiltersSideBar'

export default class SideBar extends Component {

    render() {

        const { sideBarPath, genresList, filters, onChangeFilters, checkSwitcher, dataNews, ratingMovie } = this.props;

        const item = sideBarPath === "main"
            ? <MainSideBar
                dataNews={dataNews}
                ratingMovie={ratingMovie}
            />
            : <FilterSideBar
                genresList={genresList}
                filters={filters}
                onChangeFilters={onChangeFilters}
                checkSwitcher={checkSwitcher}
            />;

        return (
            <div className="sideBar">
                {item}
            </div>
        );
    };
};
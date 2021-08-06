import React, { Component } from 'react';
import './SideBar.scss';
// import MainSideBar from './MainSideBar/MainSideBar'
import FilterSideBar from './FiltersSideBar/FiltersSideBar'

export default class SideBar extends Component {

    render() {

        const {  filters, genresList, onChangeFilters,checkSwitcher} = this.props;

        return (
            <div className="sideBar">
                <FilterSideBar
                    filters={filters}
                    genresList={genresList}
                    onChangeFilters={onChangeFilters}
                    checkSwitcher={checkSwitcher}
                />
            </div>
        );
    };
};
import React, { Component } from 'react';

export default class SortBy extends Component {


    render() {

        const {
            filters: { sort_by },
            onChangeFilters
        } = this.props;

        return (
            <div className="sideBar-FilterSideBar__wrapper">
                <div className="wrapper-label">
                    <h3 className="label">Sort By:</h3>
                </div>
                <div className="wrapper-select">
                    <select
                        className="select"
                        name="sort_by"
                        value={sort_by}
                        onChange={onChangeFilters}
                    >
                        <option value="popularity.desc" >Popular descending</option>
                        <option value="popularity.asc" >Popular ascending</option>
                        <option value="vote_average.desc" >Descending rating</option>
                        <option value="vote_average.asc" >Ascending rating</option>
                    </select>
                </div>
            </div>
        );
    };
};
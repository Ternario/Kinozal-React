import React, { Component } from 'react';

export default class ReleaseYear extends Component {


    state = {
        date: new Date().getFullYear()
    };

    getOptions = (item) => {
        let date = 2000;

        const dateArray = [];

        while (date <= item) {
            dateArray.push(date);
            date++
        };

        return dateArray.map((item) => {
            return (
                <option key={item} value={item} >{item}</option>
            );
        });
    };

    render() {

        const {
            filters: {
                releaseYear
            },
            onChangeFilters
        } = this.props;

        const { date } = this.state;
        const option = this.getOptions(date);

        return (
            <div className="sideBar-FilterSideBar__wrapper">
                <div className="wrapper-label">
                    <h3 className="label">Release Year:</h3>
                </div>
                <div className="wrapper-select">
                    <select
                        className="select"
                        name="releaseYear"
                        value={releaseYear}
                        onChange={onChangeFilters}
                    >
                        <option value="" >Select year</option>
                        {option}
                    </select>
                </div>
            </div>
        );
    };
};
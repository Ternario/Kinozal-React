import React, { Component } from 'react';

export default class ReleaseYear extends Component {

    render() {

        const {
            filters: {
                releaseYear
            },
            onChangeFilters
        } = this.props;

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
                        <option value="Select year" >Select year</option>
                        <option value="2021" >2021</option>
                        <option value="2020" >2020</option>
                        <option value="2019" >2019</option>
                        <option value="2018" >2018</option>
                        <option value="2017" >2017</option>
                        <option value="2016" >2016</option>
                        <option value="2015" >2015</option>
                        <option value="2014" >2014</option>
                        <option value="2013" >2013</option>
                        <option value="2012" >2012</option>
                        <option value="2011" >2011</option>
                        <option value="2010" >2010</option>
                        <option value="2009" >2009</option>
                        <option value="2008" >2008</option>
                        <option value="2007" >2007</option>
                        <option value="2006" >2006</option>
                        <option value="2005" >2005</option>
                        <option value="2004" >2004</option>
                        <option value="2003" >2003</option>
                        <option value="2002" >2002</option>
                        <option value="2001" >2001</option>
                        <option value="2000" >2000</option>
                    </select>
                </div>
            </div>
        );
    };
};
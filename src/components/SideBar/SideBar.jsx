import React, { Component } from 'react';
import './SideBar.scss';
import MainSideBar from './MainSideBar/MainSideBar'
import FilterSideBar from './FiltersSideBar/FiltersSideBar'

export default class SideBar extends Component {
    state = {
        sideBar: "main"
    }

    componentDidMount() {
        this.toggleSideBar();
    };

    toggleSideBar() {
        const { sideBar } = this.props;

        this.setState({
            sideBar
        })
    };


    render() {

        const { sideBar } = this.state;
        const { getGenresList, dataNews, ratingMovie } = this.props;

        const item = sideBar === "main" ? <MainSideBar dataNews={dataNews} ratingMovie={ratingMovie} /> 
        : <FilterSideBar getGenresList={getGenresList} />;

        return (
            <div className="sideBar">
                {item}
            </div>
        );
    };
};
import React, { Component } from 'react';
import './SideBar.scss';
import MainSideBar from './MainSideBar/MainSideBar'
import FilterSideBar from './FiltersSideBar/FiltersSideBar'

export default class SideBar extends Component {
    state = {
        sideBar: ""
    }

    componentDidMount() {
        this.toggleSideBar();
    };

    componentDidUpdate(prevProps) {
        if (this.props.sideBar !== prevProps.sideBar) {
            this.toggleSideBar()
        }
    }

    toggleSideBar() {
        const { sideBar } = this.props;

        this.setState({
            sideBar
        })
    };


    render() {

        const { sideBar } = this.state;

        const { filters, onChangeFilters, getGenresList, dataNews, ratingMovie } = this.props;

        if (sideBar === "") {
            return <div>Loading...</div>
        }

        const item = sideBar === "main"
            ? <MainSideBar dataNews={dataNews} ratingMovie={ratingMovie} />
            : <FilterSideBar filters={filters} onChangeFilters={onChangeFilters} getGenresList={getGenresList} sideBar={sideBar} />;

        return (
            <div className="sideBar">
                {item}
            </div>
        );
    };
};
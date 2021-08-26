import React, { Component } from 'react';
import PersonVideoItems from './PersonVideoItems/PersonVideoItems';


export default class PersonVidoe extends Component {

    state = {
        type: "cast",
        castList: null,
        crewList: null,
    };

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps) {
        if (this.props.personVideoData !== prevProps.personVideoData) {
            this.getMovies()
        };
    };

    getMovies() {
        const { personVideoData: { castList, crewList } } = this.props;

        this.setState({
            castList,
            crewList
        });
    };

    toggleButton = (item) => {
        this.setState({
            type: item
        });
    };

    render() {
        const { type, castList, crewList } = this.state;

        const items = type === "cast" ?
            <PersonVideoItems items={castList} />
            :
            <PersonVideoItems items={crewList} />

        return (
            <div className="itemDetails-itemPersonDetails__personVideo">
                <div className="toggleButton">
                    <button
                        className={type === "cast" ? "btn active" : "btn"}
                        onClick={() => {
                            this.toggleButton("cast")
                        }} >Cast</button>
                    <button
                        className={type === "crew" ? "btn active" : "btn"}
                        onClick={() => {
                            this.toggleButton("crew")
                        }} >Crew</button>
                </div>
                {items}
            </div>
        );
    };
};
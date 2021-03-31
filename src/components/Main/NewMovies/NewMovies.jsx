import React, {Component} from 'react';
import Section from './Section/Section';

export default class NewMovies extends Component {

    render() {

        const {getData} = this.props

        return (
            <div className="main-newMovies">
                <div className="main-newMovies__label">
                    <h1 className="label">New movies</h1>
                </div>
                <div className="main-newMovies__wrapper">
                    <Section getData={getData} />
                </div>
            </div>
        );
    }
}
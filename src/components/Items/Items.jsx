import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';

import { withRouter } from 'react-router-dom';

class Items extends Component {

    render() {

        const { title, getData } = this.props;

        return (
            <div className="movies">
                <div className="movies-label">
                    <h1 className="label">{title}</h1>
                </div>
                <div className="movies-newMovies">
                    <Section
                        onItemSelected={(itemId) => {
                            this.props.history.push(String(itemId))
                        }}
                        getData={getData} />
                </div>
            </div>
        );
    };
};

export default withRouter(Items);
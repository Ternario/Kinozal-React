import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';

import {withRouter} from 'react-router-dom';

import MoviesData from '../../Service/Service';

class Items extends Component {

    service = new MoviesData();

    state = {
        selectedItem: null
    };

    onItemSelected = (id) => {
        this.setState({
            electedItem: id
        })
    }

    render() {
        return (
            <div className="movies">
                <div className="movies-label">
                    <h1 className="label">Movies</h1>
                </div>
                <div className="movies-newMovies">
                <Section 
                    onItemSelected={(itemId)=> {
                        this.props.history.push(itemId)
                    }}
                    getData={this.service.getMovies} />
                </div>
            </div>
        );
    };
};

export default withRouter(Items);
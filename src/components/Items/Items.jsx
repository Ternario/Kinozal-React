import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';

import { withRouter } from 'react-router-dom';

// make function

class Items extends Component {

    render() {
        const { type, getData } = this.props;

        return (

            <Section
                onItemSelected={(id, title) => {
                    this.props.history.push(`/${type}/${id}-${title}`)
                }}
                type={type}
                getData={getData} />

        );
    };
};

export default withRouter(Items);
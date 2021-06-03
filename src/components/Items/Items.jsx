import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';

import { withRouter } from 'react-router-dom';

// make function

class Items extends Component {

    render() {
        const { getData, filters } = this.props;

        return (

            <Section
                onItemSelected={(id, title) => {
                    this.props.history.push(`${id}-${title}`)
                }}
                getData={getData}
                filters={filters}
            />

        );
    };
};

export default withRouter(Items);
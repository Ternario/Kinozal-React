import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';

import { withRouter } from 'react-router-dom';

class Items extends Component {

    render() {

        const { getData, title } = this.props;

        return (

            <Section
                onItemSelected={(type, id) => {
                    this.props.history.push(`/${type}s/${id}`)
                }}
                getData={getData} title={title} />

        );
    };
};

export default withRouter(Items);
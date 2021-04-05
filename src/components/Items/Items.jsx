import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';

import { withRouter } from 'react-router-dom';

class Items extends Component {

    render() {

        const { getData } = this.props;

        if (!getData) {
            return <div>loading...</div>
        }

        return (

            <Section
                onItemSelected={(type, id) => {
                    this.props.history.push(`/${type}s/${id}`)
                }}
                getData={getData} />

        );
    };
};

export default withRouter(Items);
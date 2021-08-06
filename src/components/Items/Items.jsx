import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';

import { withRouter } from 'react-router-dom';

// make function

class Items extends Component {

    render() {
        const { type, page, results, isShowSideBar } = this.props;

        return (

            <Section
                page={page}
                results={results}
                type={type}
                isShowSideBar={isShowSideBar}
                onItemSelected={(type, id, title) => {
                    this.props.history.push(`/${type}/${id}-${title}`)
                }}
            />
        );
    };
};

export default withRouter(Items);
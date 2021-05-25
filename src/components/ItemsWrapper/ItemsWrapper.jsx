import React, { Component } from 'react';
import Items from '../Items/Items';
import '../Items/Items.scss'

export default class ItemsWrapper extends Component {

    render() {

        const { title, getData, filters, type } = this.props;

        return (
            <div className="sectionWrapper">
                <div className="sectionWrapper-label">
                    <h2 className="label">{title}</h2>
                </div>
                <div className="sectionWrapper-items">
                    <Items title={title} getData={getData} filters={filters} type={type} />
                </div>
            </div>
        );
    };
};


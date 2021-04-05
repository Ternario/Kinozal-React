import React, { Component } from 'react';
import Items from '../Items/Items';
import '../Items/Items.scss'

export default class ItemsWrapper extends Component {

    render() {

        const {title, getData} = this.props

        return (
            <div className="sectionWrapper">
                <div className="sectionWrapper-label">
                    <h1 className="label">{title}</h1>
                </div>
                <div className="sectionWrapper-items">
                    <Items getData={getData} />
                 </div>
            </div>
        );
    };
};


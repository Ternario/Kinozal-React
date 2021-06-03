import React, { Component } from 'react';
import Items from '../Items/Items';
import '../Items/Items.scss'

export default class ItemsWrapper extends Component {
    componentDidMount() {
        if (this.props.sideBarPath === null || this.props.sideBarPath !== this.props.type) {
            this.props.getGenresData(this.props.type);
        };
    };

    render() {

        const { title, getData, filters } = this.props;

        return (
            <div className="sectionWrapper">
                <div className="sectionWrapper-label">
                    <h2 className="label">{title}</h2>
                </div>
                <div className="sectionWrapper-items">
                    <Items title={title}
                        getData={getData}
                        filters={filters}
                    />
                </div>
            </div>
        );
    };
};


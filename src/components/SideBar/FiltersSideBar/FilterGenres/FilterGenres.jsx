import React, { Component } from 'react';

export default class FilterGenres extends Component {

    renderItems(items) {
        return items.map(({ id, name, checked }) => {
            return (
                <div key={id} className="item">
                    <input
                        id={id}
                        type="checkbox"
                        className="selectGenre"
                        checked={checked}
                        onChange={this.props.checkSwitcher}
                    />
                    <label className="selectGenre" htmlFor={id}>{name}</label>
                </div>
            );
        });
    };

    render() {

        const { genresList } = this.props;

        if (!genresList) {
            return <div>Loading...</div>
        };

        const item = this.renderItems(genresList);

        return (
            <div className="sideBar-FilterSideBar__wrapper">
                <div className="wrapper-label">
                    <h3 className="label">Genres:</h3>
                </div>
                <div className="wrapper-items">
                    {item}
                </div>
            </div>
        );
    };
};
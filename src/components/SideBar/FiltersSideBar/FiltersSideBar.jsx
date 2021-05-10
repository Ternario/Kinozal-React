import React, { Component } from 'react';

export default class FilterSideBar extends Component {

    state = {
        itemList: null
    }

    componentDidMount() {
        this.getDate()
    }

    getDate() {
        const { getGenresList } = this.props;

        const list = "/genre/tv/list";

        getGenresList(list)
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(items) {
        return items.map(({ id, name }) => {
            return (
                <div key={id} className="wrapper-item">
                    <input
                        id={id}
                        type="checkbox"
                        className="selectGenre"
                        value={name} />
                    <label htmlFor={id}>{name}</label>
                </div>
            )
        })
    }

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>Loading...</div>
        }

        const item = this.renderItems(itemList)

        console.log(itemList)

        return (
            <div className="sideBar-FilterSideBar">
                <div className="sideBar-FilterSideBar__label">
                    <h3 className="label">Genres:</h3>
                </div>
                <div className="sideBar-FilterSideBar__wrapper">

                    {item}
                </div>
            </div>
        );
    };
};

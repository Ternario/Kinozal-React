import React, { Component } from 'react';

export default class FilterGenres extends Component {

    state={
        itemList: null
    }

    componentDidMount() {
        const {itemList} = this.props;

        const list = itemList.map((item) => {
            return item.checked = false
        })

        this.setState({
            itemList: list
        })

    }

    renderItems(items) {
        return items.map(({ id, name }) => {
            return (
                <div key={id} className="item">
                    <input
                        id={id}
                        type="checkbox"
                        className="selectGenre"
                        value={name} />
                    <label className="selectGenre" htmlFor={id}>{name}</label>
                </div>
            )
        })
    }

    render() {

        const { itemList } = this.state;
        console.log(itemList)

        if (!itemList) {
            return <div>Loading...</div>
        }

        const item = this.renderItems(itemList)

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
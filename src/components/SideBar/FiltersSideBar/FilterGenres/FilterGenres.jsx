import React, { Component } from 'react';

export default class FilterGenres extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        this.getDate();
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.props.itemList !== prevProps.itemList) {
            this.getDate();
        }

        if (prevState.itemList !== this.state.itemList) {
            this.genres(this.stateitemList);
        }
    }

    getDate() {
        const { itemList } = this.props;

        this.setState({
            itemList
        });
    };

    checkSwitcher = (e) => {

        const id = Number(e.target.id);
        const checked = e.target.checked;

        const { itemList } = this.state;

        const itemIndex = itemList.findIndex((item) => {
            return item.id === id;
        });

        const isChecked = itemList[itemIndex];
        isChecked.checked = checked;

        const newItemList = [...itemList.slice(0, itemIndex), isChecked, ...itemList.slice(itemIndex + 1)];

        this.setState({
            itemList: newItemList
        });
    };

    genres = () => {
        const { itemList } = this.state;

        const selectedItems = itemList.filter((item) => {
            return item.checked === true;
        });

        let genresId = "";

        selectedItems.forEach((item) => {
            if (!item) {
                genresId = "";
            };
            
            genresId += `&with_genres${item.id}`;
        });

        this.props.onChangeGenres(genresId);
    };

    renderItems(items) {
        return items.map(({ id, name, checked }) => {
            return (
                <div key={id} className="item">
                    <input
                        id={id}
                        type="checkbox"
                        className="selectGenre"
                        checked={checked}
                        onChange={this.checkSwitcher}
                    />
                    <label className="selectGenre" htmlFor={id}>{name}</label>
                </div>
            );
        });
    };

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>Loading...</div>
        };

        const item = this.renderItems(itemList);

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
import React, { Component } from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import ShortSearchResults from './ShortSearchResults/ShortSearchResults';

import { withRouter } from 'react-router-dom';

class Header extends Component {

    state = {
        itemList: [],
        name: "",
        showShortSearch: true
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name) {
            this.changeItemName(this.state.name)
        }
    }

    searchItem = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    changeItemName = (item) => {

        if (item === "") {
            return this.setState({
                itemList: []
            })
        };

        const { getData } = this.props;

        getData(item)
            .then((item) => {
                this.setState({
                    itemList: item
                })
            });
    };

    getItems = (e) => {

        e.preventDefault();

        const { name } = this.state;

        if (name === "") {
            return
        };

        this.showSerchItem(name)
    };

    showSerchItem = (item) => {
        this.props.history.push(`/search=${item}`);

        this.setState({
            name: ""
        });
    };

    showCurrentItem = (type, id, title) => {
        this.props.history.push(`/${type}/${id}-${title}`);

        this.setState({
            name: ""
        });
    };

    changeFocus = (item) => {
        this.setState({
            showShortSearch: item
        });
    }

    render() {

        const { name, itemList: { results, totalResults }, showShortSearch } = this.state;

        const { filterReset } = this.props;

        return (
            <div className="header" >
                <Logo />
                <Navbar
                    filterReset={filterReset}
                    getItems={this.getItems}
                    searchItem={this.searchItem}
                    changeFocus={this.changeFocus}
                    name={name}
                />
                <ShortSearchResults
                    results={results}
                    totalResults={totalResults}
                    showShortSearch={showShortSearch}
                    getItems={this.getItems}
                    showCurrentItem={this.showCurrentItem}
                />
            </div>
        );
    }
};

export default withRouter(Header);


import React, { Component } from 'react';
import './Header.scss';
import Logo from './Logo/Logo';
import Navbar from './Navbar/Navbar';
import BurgerBtn from './BurgerBtn/BurgerBtn';
import ShortSearchResults from './ShortSearchResults/ShortSearchResults';

import { withRouter } from 'react-router-dom';

class Header extends Component {

    state = {
        itemList: [],
        name: "",
        showShortSearch: true,
        flag: false
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.name !== prevState.name) {
            this.changeItemName(this.state.name)
        };
    };

    toggleBtn = () => {
        const { flag } = this.state;

        this.setState({
            flag: !flag
        });
    };

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
                });
            });
    };

    getItems = (e) => {

        e.preventDefault();

        const { name } = this.state;

        if (name === "") {
            return
        };

        this.showSerchItem(name);
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
    };

    render() {

        const { name, itemList: { results, totalResults }, showShortSearch, flag } = this.state;

        const { filterReset } = this.props;

        return (
            <div className="header" >
                <Logo />
                <Navbar
                    filterReset={filterReset}
                    getItems={this.getItems}
                    searchItem={this.searchItem}
                    changeFocus={this.changeFocus}
                    toggleBtn={this.toggleBtn}
                    name={name}
                />
                {flag ? <BurgerBtn
                    filterReset={filterReset}
                    toggleBtn={this.toggleBtn}
                />
                    :
                    null}

                <ShortSearchResults
                    results={results}
                    totalResults={totalResults}
                    showShortSearch={showShortSearch}
                    getItems={this.getItems}
                    showCurrentItem={this.showCurrentItem}
                />
            </div>
        );
    };
};

export default withRouter(Header);


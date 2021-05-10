import React, { Component } from 'react';
import search from '../../../../img/icons-search.png'

import { withRouter } from 'react-router-dom';

class SearchPanel extends Component {

    state = {
        name: ""
    }

    searchItem = (e) => {

        this.setState({
            name: e.target.value
        });
    }

    showSerchItem = (e) => {

        e.preventDefault();

        const { name } = this.state

        if (name === "") {
            return
        }

        this.props.history.push(`/search=${name}`)

        this.setState({
            name: ""
        });
    }

    render() {

        const { name } = this.state

        return (
            <div className="header-navbar__searchPanel">
                <form className="wrapper-form" onSubmit={this.showSerchItem}>
                    <input
                        type="search"
                        className="inputSearch"
                        placeholder="Site search"
                        onChange={this.searchItem}
                        value={name} />
                    <button type="submit" className="searchBtn">
                        <img src={search} alt="search" className="searchBtn-image" />
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(SearchPanel);
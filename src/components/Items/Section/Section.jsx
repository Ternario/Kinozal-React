import React, { Component } from 'react';
import './Section.scss'

export default class Section extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        const { getData } = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    };

    renderItems = (arr) => {
        return arr.map(({ id, poster, title, type }) => {
            return (
                <div key={id} className="section"
                    onClick={() => {
                        this.props.onItemSelected(type, id)
                    }} >
                    <div className="section-poster">
                        <img src={poster} alt="section" />
                    </div>
                    <div className="section-name">
                        <div className="section-name">{title}</div>
                    </div>
                </div>
            )
        });
    };

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>loading...</div>
        }

        const items = this.renderItems(itemList);

        return (
            <>
                {items}
            </>
        );
    }
}
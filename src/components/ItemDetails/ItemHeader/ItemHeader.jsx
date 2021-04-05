import React, { Component } from 'react';

export default class ItemHeader extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {

        const { itemId, getData } = this.props;

        getData(Number(itemId))
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItem = (arr) => {

        return arr.map(({ id, poster, title, year, rank, director, writer, genres }) => {
            return (
                <div className="itemDetails-header" key={id}>
                    <h2 className="title">{title}</h2>
                    <div className="itemDetails-header__wrapper">
                        <div className="item-poster">
                            <img src={poster} alt="poster" className="poster" />
                        </div>
                        <div className="items-info">
                            <div className="items">
                                <div className="item-title">Year:</div>
                                <div className="item">{year}</div>
                            </div>
                            <div className="items">
                                <div className="item-title">Rank:</div>
                                <div className="item">{rank}</div>
                            </div>
                            <div className="items">
                                <div className="item-title">Director:</div>
                                <div className="item">{director}</div>
                            </div>
                            <div className="items">
                                <div className="item-title">Writer:</div>
                                <div className="item">{writer}</div>
                            </div>
                            <div className="items">
                                <div className="item-title">Genres:</div>
                                <div className="item">{`${genres},`}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>loading...</div>
        }

        const item = this.renderItem(itemList);

        return (
            <>
                {item}
            </>
        );
    }
}


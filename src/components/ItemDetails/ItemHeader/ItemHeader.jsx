import React, { Component } from 'react';

export default class ItemHeader extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {

        const { itemId, getData,} = this.props;

        // const ttt = match.params.id
        // console.log(ttt)

        getData(Number(itemId))
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItem = (arr) => {

        return arr.map(({ id, poster, title, year, rank, director, writer, genres }) => {
            return <div key={id}>
                <div className="moviesItem-itemHeader__poster">
                    <img src={poster} alt="poster" className="item-poster" />
                </div>
                <div className="moviesItem-itemHeader__wrapper">
                    <h1 className="item-title">{title}</h1>
                    <div className="item-year">Year: {year}</div>
                    <div className="item-rank">Rank: {rank}</div>
                    <div className="item-director">Director: {director}</div>
                    <div className="item-writer">Writer: {writer}</div>
                    <div className="item-genres">Genres: {genres} </div>
                </div>
            </div>
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


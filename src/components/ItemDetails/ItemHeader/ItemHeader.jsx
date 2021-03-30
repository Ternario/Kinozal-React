import React, { Component } from 'react';
// import MoviesData from '../../../Service/Service';

export default class itemHeader extends Component {

    // service = new MoviesData()

    state = {
        itemList: null
    };

    componentDidMount() {
        this.updateee();
    }

    componentDidUpdateee(prevProps) {
        if(this.props.itemId !== prevProps.itemId) {
            this.updateee()
        }
    }

    updateee() {
        const {itemId, getData} = this.props;
        if (!itemId) {
            return;
        }

        console.log(itemId)

        getData(5)
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItem = (arr) => {
        console.log(this.state.itemList);
        console.log(this.props.itemId);


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

        const item = this.renderItem(itemList)

        return (
            <>
                {item}
            </>
        );
    }
}


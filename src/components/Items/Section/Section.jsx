import React, { Component } from 'react';

export default class Section extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {

        const {getData} = this.props;

        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    };

    renderItems = (arr) => {
        return arr.map(({id, poster, title}) => {
            return (
                <div key={id} className="movies-newMovies__wrapper" onClick={() => {
                    this.props.onItemSelected(id)
                }} >
                    <div className="sectionMovies-poster">
                        <img src={poster} alt="section"/>
                    </div>
                    <div className="sectionMovies-name">
                        <div className="movie-name">{title}</div>
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
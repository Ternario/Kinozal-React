import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Section extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        this.updateData()
    };

    componentDidUpdate(prevProps) {
        if (this.props.getData !== prevProps.getData) {
            this.updateData()
        }
    }

    updateData() {
        const { getData } = this.props;
        getData()
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems = (arr) => {
        return arr.map(({ id, poster, title, type }) => {
            return (
                <Link key={id} to={`/${type}/${id}`}>
                    <div className="movies-newMovies__wrapper">
                        <div className="sectionMovies-poster">
                            <img src={poster} alt="section" />
                        </div>
                        <div className="sectionMovies-name">
                            <div className="movie-name">{title}</div>
                        </div>
                    </div>
                </Link>
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
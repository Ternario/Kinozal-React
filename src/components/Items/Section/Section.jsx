import React, { Component } from 'react';

export default class Section extends Component {

    state = {
        itemList: null
    };

    componentDidMount() {
        this.getMovies();
    };

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title) {
            this.getMovies();
        }
    }

    getMovies() {
        const { getData, title } = this.props;

        getData(title)
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    renderItems = (arr, title) => {

        if (arr.length === 0) {
            return <div>We don't have "{title}" :((</div>
        }

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

        const { title } = this.props;

        if (!itemList) {
            return <div>loading...</div>
        }

        const items = this.renderItems(itemList, title);

        return (
            <>
                {items}
            </>
        );
    }
}
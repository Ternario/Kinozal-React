import React, { Component } from 'react';

export default class ItemContent extends Component {

    state = {
        itemVideoList: null,
        trailer: null
    }

    componentDidMount() {
        const { itemId, getVideoData } = this.props;

        getVideoData(itemId)
            .then((itemVideoList) => {
                this.setState({
                    itemVideoList
                });
            });
    };

    videoToggler(item) {
        const { itemVideoList } = this.state;

        console.log(item)

        const ttt = itemVideoList.filter((itemId) => {
            return itemId.id === item
        });

        const trailer = ttt.map((item) => {
            return item.trailer;
        });

        this.setState({
            trailer
        });

    };

    getVideos(item) {
        return item.map(({ id, name }) => {
            return <div
                key={id}
                onClick={() => {
                    this.videoToggler(id)
                }}
                className="trailer-name">{name}</div>
        });
    };

    render() {

        const { title, overview, rating, likesCount, numberOfComments } = this.props;

        const { itemVideoList, trailer } = this.state;

        if (!itemVideoList) {
            return <div>loading...</div>
        }

        const items = this.getVideos(itemVideoList);

        return (
            <div className="itemDetails-content">
                <div className="itemDetails-content__description">
                    <h2 className="title">{`About ${title}`}</h2>
                    <div className="description">{overview}</div>
                </div>
                <div className="itemDetails-content__trailer">
                    <div className="trailer-wrapper">
                        {items}
                    </div>
                    <iframe className="trailer" src={`https://www.youtube.com/embed/${trailer}`} title='video'></iframe>
                    <div className="itemBar">
                        <div className="item">Rating: {rating}</div>
                        <div className="item">Like: {likesCount}</div>
                        <div className="item">Comments: {numberOfComments}</div>
                    </div>
                </div>
            </div>
        );
    };
}


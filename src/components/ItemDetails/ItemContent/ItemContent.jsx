import React, { Component } from 'react';

export default class ItemContent extends Component {

    state = {
        itemVideoList: null,
        trailer: null
    }

    componentDidMount() {
        const { type, itemId, getVideoData } = this.props;

        getVideoData(type, itemId)
            .then((itemVideoList) => {

                const trailer = itemVideoList > [] ? itemVideoList[0].trailer : null;

                this.setState({
                    itemVideoList,
                    trailer
                });
            });
    };

    videoToggler(item) {
        const { itemVideoList, trailer } = this.state;

        if (item === trailer) {
            return
        }

        const trailerKey = itemVideoList.filter((itemKey) => {
            return itemKey.trailer === item;
        });

        this.setState({
            trailer: trailerKey[0].trailer
        });

    };

    getVideos(item) {
        return item.map(({ id, name, trailer }) => {
            return <div
                key={id}
                onClick={() => {
                    this.videoToggler(trailer);
                }}
                className={this.state.trailer === trailer ? "name active" : "name"}>
                {name}
            </div>
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
                    <div className="title" >Trailers</div>
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


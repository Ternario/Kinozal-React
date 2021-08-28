import React, { Component } from 'react';

export default class ItemContent extends Component {

    state = {
        itemVideoList: null,
        trailer: null
    }

    componentDidMount() {
        this.getData();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.getData();
        };
    };

    getData() {
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

    renderGenres(genres) {
        let genresName = "";

        genres.forEach(({ name }) => {
            genresName += `${name}, `
        });

        return genresName = genresName.slice(0, -2);
    };

    videoToggler(item) {
        const { itemVideoList, trailer } = this.state;

        if (item === trailer) {
            return;
        }

        const trailerKey = itemVideoList.filter((itemKey) => {
            return itemKey.trailer === item;
        });

        this.setState({
            trailer: trailerKey[0].trailer
        });
    };

    renderVideos(item) {
        return item.map(({ id, name, trailer }) => {
            return (
                <div
                    key={id}
                    onClick={() => {
                        this.videoToggler(trailer);
                    }}
                    className={this.state.trailer === trailer ? "name active" : "name"}>
                    {name}
                </div>
            );
        });
    };

    createdBy = (person) => {

        if (!person || person.length === 0) {
            return;
        }

        let personName = "";

        person.forEach(({ name }) => {
            personName += `${name}, `
        })

        personName = personName.slice(0, -2);

        return (
            <div className="items">
                <div className="item-title">Created by</div>
                <div className="item">{personName}</div>
            </div>
        );
    };

    runeTime = (item) => {

        if (item !== []) {
            return item;
        };

        let time = "";

        item.forEach((item) => {
            time += `${item}, `
        });

        return time = time.slice(0, -2);
    };

    render() {

        const { title, overview, rating, likesCount, country, createdBy, numberOfSeasons, numberOfSpisodes, numberOfComments, poster, date, tagline, genres, runtime, status } = this.props;

        const { itemVideoList, trailer } = this.state;

        if (!itemVideoList) {
            return <div>loading...</div>
        };

        const items = this.renderVideos(itemVideoList);

        const genresName = this.renderGenres(genres);

        const created = this.createdBy(createdBy);

        const time = this.runeTime(runtime);

        return (
            <div className="itemDetails-itemVideoDetails__content">
                <h2 className="title">{title}</h2>
                <div className="content-data">
                    <div className="item-poster">
                        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt="poster" className="poster" />
                    </div>
                    <div className="items-info">
                        <div className="items">
                            <div className="item-title">Rating:</div>
                            <div className="item">{rating}</div>
                        </div>

                        {tagline ?
                            <div className="items">
                                <div className="item-title">Tagline:</div>
                                <div className="item">"{tagline}"</div>
                            </div>
                            :
                            null}

                        <div className="items">
                            <div className="item-title">Year:</div>
                            <div className="item">{date}</div>
                        </div>

                        {country ?
                            <div className="items">
                                <div className="item-title">Country</div>
                                <div className="item">{country}</div>
                            </div>
                            :
                            null}

                        {created}

                        <div className="items">
                            <div className="item-title">Genres:</div>
                            <div className="item">{genresName}</div>
                        </div>

                        {numberOfSeasons ? <>
                            <div className="items">
                                <div className="item-title">Number of Seasons:</div>
                                <div className="item">{numberOfSeasons}</div>
                            </div>
                            <div className="items">
                                <div className="item-title">Number of Episodes:</div>
                                <div className="item">{numberOfSpisodes}</div>
                            </div>
                        </>
                            :
                            null}

                        <div className="items">
                            <div className="item-title">Status:</div>
                            <div className="item">{status}</div>
                        </div>
                        <div className="items">
                            <div className="item-title">Runtime:</div>
                            <div className="item">{time} min</div>
                        </div>
                    </div>
                </div>
                <div className="content-description">
                    <h2 className="title">{`About ${title}`}</h2>
                    <div className="description">{overview}</div>
                </div>
                <div className="content-trailer">
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
};


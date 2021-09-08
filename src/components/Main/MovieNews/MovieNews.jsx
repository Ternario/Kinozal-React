import React from 'react';

const MovieNews = ({ movieNews }) => {

    const elements = movieNews.map(({ id, title, image, content }) => {
        return (
            <div key={id} className="news">
                <div className="news-title">
                    <h2 className="title">{title}</h2>
                </div>
                <div className="news-wrapper">
                    <div className="news-wrapper__poster">
                        <img src={image} alt="news" className="poster" />
                    </div>
                    <div className="news-wrapper__content">
                        <div className="content">
                            <div className="content-text">{content}</div>
                        </div>
                        <div className="content-btn">
                            <button className="btn">More details</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="movieNews">
            <div className="movieNews-title">
                <h2 className="title">Movie news</h2>
            </div>
            <div className="movieNews-wrapper">
                {elements}
            </div>
        </div>
    );
}

export default MovieNews;
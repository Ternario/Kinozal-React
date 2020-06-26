import React from 'react';

const News = ({ image, title, content }) => {
    return (
        <div className="news">
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
    );
}

export default News;
import React from 'react';


const SiteNews = ({ dataNews }) => {

    const elements = dataNews.map(({ id, image, title, date }) => {
        return (
            <div
                key={id}
                className="mainSideBar-siteNews__wrapper"
            >
                <div className="wrapperItem">
                    <div className="image-wrapper">
                        <img src={image} alt="news" className="image-wrapper__newsImage" />
                    </div>
                    <div className="text-wrapper">
                        <div className="text-wrapper__newsText">{title}</div>
                        <div className="text-wrapper__wrapperDate">
                            <div className="date">{date}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    })

    return (
        <div className="mainSideBar-siteNews">
            <div className="mainSideBar-siteNews__label">
                <h3 className="label">Site news</h3>
            </div>
            {elements}
        </div>
    );
};

export default SiteNews;
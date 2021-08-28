import React from 'react';
import News from './News/News';


const SiteNews = ({ dataNews }) => {

    const elements = dataNews.map((item) => {
        return (
            <News key={item.id}
                image={item.image}
                title={item.title}
                date={item.date}
            />
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
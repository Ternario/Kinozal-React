import React from 'react';
import News from './News/News';

const SiteNews = () => {
    return (
        <div className="sideBar-siteNews">
            <div className="sideBar-siteNews__label">
                <h3 className="label">Site news</h3>
            </div>
            <News />
        </div>
    );
}

export default SiteNews;
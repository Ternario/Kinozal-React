import React from 'react';

const News = ({image, title, date}) => {
    return (
        <div className="sideBar-siteNews__wrapper">
            <div className="wrapperItem">
                <div className="image-wrapper">
                    <img src={image} alt="news" className="image-wrapper__newsImage"/>
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
}

export default News;
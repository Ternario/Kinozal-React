import React from 'react';

const Slides = ({src, number}) => {
    return (
        <div className="sideBar-postSlider__slides">
            <div className="slides-item slider active">
                <img src={src} alt="slide" className="slides-item__img"/>
            </div>
        </div>
    );
}

export default Slides;
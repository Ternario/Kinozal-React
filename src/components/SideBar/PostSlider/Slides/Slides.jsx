import React from 'react';
import illusion from '../../../../img/illusion.jpg'
import martian from '../../../../img/martian.jpg'
import xmen from '../../../../img/x-men.jpg'


const Slides = () => {
    return (
        <div className="sideBar-postSlider__slides">
            <div className="slides-item slider active">
                <img src={illusion} alt="slide" className="slides-item__img"/>
            </div>
            <div className="slides-item slider">
                <img src={martian} alt="slide" className="slides-item__img"/>
            </div>
            <div className="slides-item slider">
                <img src={xmen} alt="slide" className="slides-item__img"/>
            </div>
        </div>
    );
}

export default Slides;
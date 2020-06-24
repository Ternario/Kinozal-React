import React from 'react';
import Slides from './Slides/Slides';
import Buttons from './Buttons/Buttons';

const PostSlider = () => {
    return (
        <div className="sideBar-postSlider">
            <Slides />
            <Buttons name="sideBar-postSlider__buttonLeft"/>
            <Buttons name="sideBar-postSlider__buttonRight"/>
        </div>
    );
}

export default PostSlider;
import React, { Component } from 'react';
import Slides from './Slides/Slides';

import knight from '../../../../img/the-dark-knight.jpg';
import doser from '../../../../img/doser.jpg';
import dream from '../../../../img/dream-horse.jpg';

export default class PostSlider extends Component {
    
    state = {
        images: [knight, doser, dream],
        currentImage: 0,
        interval: null,
        flag: true
    };

    componentDidMount() {
        this.setState({
            interval: setInterval(this.toggleSlider, 3000)
        });
    };

    componentDidUpdate(prevProps, prevState) {
        if (this.state.flag !== prevState.flag) {
            const { interval } = this.state;

            this.setState({
                interval: clearInterval(interval)
            });
        };
    };

    componentWillUnmount() {
        const { interval } = this.state;

        this.setState({
            interval: clearInterval(interval)
        });
    };

    toggleSlider = () => {
        const { images, currentImage, flag } = this.state;

        const newIndex = flag && currentImage < images.length - 1 ? currentImage + 1 : 0;

        this.setState({
            currentImage: newIndex
        });
    };

    slideHendle = (item) => {
        const { currentImage, images } = this.state;

        if (item === "next") {

            const newIndex = currentImage < images.length - 1 ? currentImage + 1 : 0;

            this.setState({
                currentImage: newIndex,
                flag: false
            });

        } else {

            const newIndex = currentImage > 0 ? currentImage - 1 : images.length - 1;

            this.setState({
                currentImage: newIndex,
                flag: false
            });
        };
    };

    render() {
        return (
            <div className="mainSideBar-postSlider">
                <Slides
                    src={this.state.images[this.state.currentImage]}
                    number={this.state.currentImage}
                />
                <div
                    className="mainSideBar-postSlider__buttonLeft"
                    onClick={() => {
                        this.slideHendle("prev")
                    }}
                >
                    <span className="left"></span>
                    <span className="right"></span>
                </div>
                <div className="mainSideBar-postSlider__buttonRight"
                    onClick={() => {
                        this.slideHendle("next")
                    }}
                >
                    <span className="left"></span>
                    <span className="right"></span>
                </div>
            </div>
        );
    }
}


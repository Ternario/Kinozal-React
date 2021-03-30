import React, {Component} from 'react';
import Slides from './Slides/Slides';

import knight from '../../../img/the-dark-knight.jpg'
import doser from '../../../img/doser.jpg'
import dream from '../../../img/dream-horse.jpg'


export default class PostSlider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [knight, doser, dream],
            currentImage: 0
        }

        this.slideHendle = this.slideHendle.bind(this);
        // this.interval = this.interval.bind(this);
    }

    // interval(){ 
        
    //     setInterval(() => {

    //         let newIndex = this.state.currentImage;

    //         if(newIndex < this.state.images.length - 1){
    //             newIndex = this.state.currentImage + 1;
    //         } else if(newIndex === this.state.images.length - 1) {
    //             newIndex = 0
    //         }

    //         this.setState({currentImage: newIndex})
    //     }, 2000);

    // }
    // onLoad={this.interval.bind(this)}

    slideHendle(e) {
        let newIndex = this.state.currentImage;

        if(e.currentTarget.dataset.direction === "next") {

            if(newIndex < this.state.images.length - 1){
                newIndex = this.state.currentImage + 1;
            } else if(newIndex === this.state.images.length - 1) {
                newIndex = 0
            }

        } else {

            if(newIndex > 0) {
                newIndex = this.state.currentImage - 1;
            } else if(newIndex === 0) {
                newIndex = this.state.images.length - 1;
            }

        }

        this.setState({currentImage: newIndex})
    }

    render() {
        return (
            <div className="sideBar-postSlider">
                <Slides  src={this.state.images[this.state.currentImage]} number={this.state.currentImage} />
                <div data-direction="prev" onClick={this.slideHendle.bind(this)} className="sideBar-postSlider__buttonLeft">
                    <span className="left"></span>
                    <span className="right"></span>
                </div>
                <div data-direction="next" onClick={this.slideHendle.bind(this)} className="sideBar-postSlider__buttonRight">
                    <span className="left"></span>
                    <span className="right"></span>
                </div>
            </div>
        );
    } 
}


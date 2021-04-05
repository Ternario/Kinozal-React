import React, { Component } from 'react';
import './Items.scss';
import Section from './Section/Section';
// import MoviesData from '../../Service/Service'

import { withRouter } from 'react-router-dom';

class Items extends Component {

    // service = new MoviesData();

    // state = {
    //     type: null,
    //     getData: null
    // }

    // componentDidMount() {
    //     this.updateData()
    // }

    // componentDidUpdate(prevProps) {
    //     if(this.props.match.params.type !== prevProps.match.params.type) {
    //         this.updateData()
    //     }
    // }

    // updateData() {
    //     const{type} = this.props.match.params

    //     // const dataType = type === "Movies"? this.service.getMovies : this.service.getSerials

    //     this.setState({
    //         type: type,
    //         getData: dataType
    //     }) 
    // }

    render() {

        const {getData } = this.props;
        if (!getData) {
            return <div>loading...</div>
        }

        return (
            <div className="movies">
                <div className="movies-label">
                    <h1 className="label">{}</h1>
                </div>
                <div className="movies-newMovies">
                    <Section
                        onItemSelected={(type, itemId) => {
                            // console.log(type)
                            // console.log(itemId)
                            this.props.history.push(itemId)
                        }}
                        getData={getData} />
                </div>
            </div>
        );
    };
};

export default withRouter(Items);
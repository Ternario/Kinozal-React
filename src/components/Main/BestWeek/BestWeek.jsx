import React, {Component} from 'react';
import Section from './Section/Section';
import MoviesData from '../../../Service/Service'

export default class BestWeek extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieList: []
        }
    }
    
    service = new MoviesData();

    componentDidMount() {
        this.service.getAllMovies()
        .then((movieList) => {
            this.setState({
                movieList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return <Section key={i} poster={item.poster} title={item.title} />
        })
    }

    render() {

        const {movieList} = this.state;

        const items = this.renderItems(movieList)

        return (
            <div className="main-bestWeek">
                <div className="main-bestWeek__label">
                    <h2 className="label">TOP of the week</h2>
                </div>
                <div className="main-bestWeek__wrapper">
                    {items}
                </div>
            </div>
        );
    }
}
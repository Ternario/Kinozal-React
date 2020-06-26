import React, {Component} from 'react';
import Section from './Section/Section';
import MoviesData from '../../../Service/Service'


export default class NewMovies extends Component {
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
            <div className="main-newMovies">
                <div className="main-newMovies__label">
                    <h1 className="label">New movies</h1>
                </div>
                <div className="main-newMovies__wrapper">
                    {items}
                </div>
            </div>
        );
    }
}






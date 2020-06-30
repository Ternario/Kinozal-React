import React, {Component} from 'react';
import './Movies.scss';
import SectionMovies from './SectionMovies/SectionMovies';
import MoviesData from '../../Service/Service';


export default class Movies extends Component {
    state = {
        itemList: []
    }
    
    service = new MoviesData();

    componentDidMount() {
        this.service.getMovies()
        .then((itemList) => {
            this.setState({
                itemList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return <SectionMovies key={i} poster={item.poster} title={item.title} />
        })
    }

    render() {

        const {itemList} = this.state;

        const items = this.renderItems(itemList)

        return (
            <div className="movies">
                <div className="movies-label">
                    <h1 className="label">Movies</h1>
                </div>
                <div className="movies-newMovies">
                    {items}
                </div>
            </div>
        );
    }
}
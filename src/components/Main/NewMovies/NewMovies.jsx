import React, {Component} from 'react';
import Section from './Section/Section';
import MoviesData from '../../../Service/Service';


export default class NewMovies extends Component {
    state = {
        itemList: []
    }
    
    service = new MoviesData();

    componentDidMount() {
        this.service.getAll()
        .then((itemList) => {
            this.setState({
                itemList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return <Section key={i} poster={item.poster} title={item.title} />
        })
    }

    render() {

        const {itemList} = this.state;

        const items = this.renderItems(itemList)

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






import React, {Component} from 'react';
import Section from './Section/Section';
import MoviesData from '../../../Service/Service';

export default class BestWeek extends Component {
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
import React, {Component} from 'react';
import './Serials.scss';
import SectionSerials from './SectionSerials/SextionSerials'
import MoviesData from '../../Service/Service'

export default class Serials extends Component {
    state = {
        itemList: []
    }
    
    service = new MoviesData();

    componentDidMount() {
        this.service.getSerials()
        .then((itemList) => {
            this.setState({
                itemList
            })
        })
    }

    renderItems(arr) {
        return arr.map((item, i) => {
            return <SectionSerials key={i} poster={item.poster} title={item.title} />
        })
    }

    render() {

        const {itemList} = this.state;

        const items = this.renderItems(itemList)

        return (
            <div className="serials">
                <div className="serials-label">
                    <h1 className="label">Serials</h1>
                </div>
                <div className="serials-newSerials">
                    {items}
                </div>
            </div>
        );
    }
}
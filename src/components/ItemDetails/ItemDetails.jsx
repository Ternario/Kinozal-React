import React, { Component } from 'react';
import MoviesData from '../../Service/Service'
import ItemHeader from './ItemHeader/ItemHeader';
// import ItemContent from './ItemContent/ItemContent';
// import ItemFooter from './ItemFooter/ItemFooter';

export default class ItemDetails extends Component {

    service = new MoviesData();

    render() {
        const { itemType, itemId } = this.props

        return (
            <div className="itemDetails">
                <ItemHeader itemType={itemType} itemId={itemId} getData={this.service.getMovieById} />
                {/* <ItemContent />
                <ItemFooter /> */}
            </div>
        );
    }
}

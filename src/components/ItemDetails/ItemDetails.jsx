import React, { Component } from 'react';
import "./ItemDetails.scss"
import ItemHeader from './ItemHeader/ItemHeader';
import ItemContent from './ItemContent/ItemContent';
import ItemFooter from './ItemFooter/ItemFooter';

export default class ItemDetails extends Component {


    state = {
        itemList: null
    };

    componentDidMount() {

        const { itemId, getData } = this.props;

        getData(Number(itemId))
            .then((itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItemHeader = (arr) => {

        return arr.map((item, id) => {
            return (
                <div key={id}>
                <ItemHeader {...item} />
                <ItemContent  {...item} />
                </div>
            )
        })
    }

    // renderItemContent = (arr) => {

    //     return arr.map(({ title, type, content, id }) => {
    //         return (
                
    //         )
    //     })
    // }

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>loading...</div>
        }

        const itemHeader = this.renderItemHeader(itemList);
        // const itemContent = this.renderItemContent(itemList);
        // const itemFooter = this.renderItem(itemList);

        return (
            <div className="itemDetails">
                {itemHeader}
                {/* {itemContent} */}
                <ItemFooter />
            </div>
        );
    }
}

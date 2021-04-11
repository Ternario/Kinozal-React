import React, { Component } from 'react';
import "./ItemDetails.scss"
import ItemHeader from './ItemHeader/ItemHeader';
import ItemContent from './ItemContent/ItemContent';
import ItemFooter from './ItemFooter/ItemFooter';

export default class ItemDetails extends Component {


    state = {
        itemList: null,
        comments: [
            { id: 1, name: "Georgiy Serg_Frost Harlan", comment: ""},
            { id: 2, name: "Georgiy Serg_Frost Harlan", comment: ""},
            { id: 3, name: "Georgiy Serg_Frost Harlan", comment: ""},
            { id: 4, name: "Georgiy Serg_Frost Harlan", comment: ""},
        ]
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

    render() {

        const { itemList } = this.state;

        if (!itemList) {
            return <div>loading...</div>
        }

        const itemHeader = this.renderItemHeader(itemList);


        return (
            <div className="itemDetails">
                {itemHeader}
                <ItemFooter />
            </div>
        );
    }
}

import React, { Component } from 'react';
import "./ItemDetails.scss"
import ItemHeader from './ItemHeader/ItemHeader';
import ItemContent from './ItemContent/ItemContent';
import ItemComments from './ItemComments/ItemComments'
import ItemAddComment from './ItemAddComment/ItemAddComment';

export default class ItemDetails extends Component {


    state = {
        itemList: null
    };

    componentDidMount() {

        const { itemId, getData } = this.props;

        getData(itemId)
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    }

    render() {

        const { itemList } = this.state;
        const { comments, onDeliteComment, onAddComment } = this.props;

        if (!itemList) {
            return <div>loading...</div>
        }

        return (
            <div className="itemDetails">
                <ItemHeader {...itemList} />
                <ItemContent  {...itemList} />
                <div className="itemDetails-footer">
                    <ItemComments comments={comments} onDeliteComment={onDeliteComment} />
                    <ItemAddComment onAddComment={onAddComment} />
                </div>
            </div>
        );
    }
}

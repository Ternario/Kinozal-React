import React, { Component } from 'react';
import "./ItemDetails.scss"
import ItemHeader from './ItemHeader/ItemHeader';
import ItemContent from './ItemContent/ItemContent';
import ItemComments from './ItemComments/ItemComments'
import ItemAddComment from './ItemAddComment/ItemAddComment';

export default class ItemDetails extends Component {

    state = {
        itemList: null,
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
        
        const { comments,getVideoData, itemId, onDeliteComment, onAddComment } = this.props;

        const numberOfComments = comments.length;

        if (!itemList) {
            return <div>loading...</div>
        }

        return (
            <div className="itemDetails">
                <ItemHeader {...itemList} />
                <ItemContent {...itemList} itemId={itemId} getVideoData={getVideoData} numberOfComments={numberOfComments} />
                <div className="itemDetails-footer">
                    <ItemComments comments={comments} onDeliteComment={onDeliteComment} />
                    <ItemAddComment onAddComment={onAddComment} />
                </div>
            </div>
        );
    }
}

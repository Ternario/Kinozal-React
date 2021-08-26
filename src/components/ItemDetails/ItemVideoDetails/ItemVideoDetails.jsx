import React, { Component } from 'react';
import "./ItemVideoDetails.scss"
import ItemContent from './ItemContent/ItemContent';
import ItemComments from './ItemComments/ItemComments'
import ItemAddComment from './ItemAddComment/ItemAddComment';

export default class ItemDetails extends Component {

    state = {
        itemList: null,
    };

    componentDidMount() {
        this.getDataItems();
    };

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.getDataItems();
        };
    };

    getDataItems() {
        const { type, itemId, getData } = this.props;

        getData(type, itemId)
            .then((itemList) => {
                this.setState({
                    itemList
                });
            });
    };

    render() {

        const { itemList } = this.state;

        const { comments, getVideoData, type, itemId, onDeliteComment, onAddComment } = this.props;

        const numberOfComments = comments.length;

        if (!itemList) {
            return <div>loading...</div>
        };

        return (
            <div className="itemDetails-itemVideoDetails" >
                <ItemContent
                    {...itemList}
                    type={type}
                    itemId={itemId}
                    getVideoData={getVideoData}
                    numberOfComments={numberOfComments}
                />
                <div className="itemDetails-footer">
                    <ItemComments
                        comments={comments}
                        onDeliteComment={onDeliteComment}
                    />
                    <ItemAddComment onAddComment={onAddComment} />
                </div>
            </div>
        );
    }
}

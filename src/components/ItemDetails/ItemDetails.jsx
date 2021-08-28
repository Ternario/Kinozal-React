import React, { Component } from 'react';
import './ItemDetails.scss';
import ItemVideoDetails from './ItemVideoDetails/ItemVideoDetails';
import ItemPersonDetails from './ItemPersonDetails/ItemPersonDetails';

export default class ItemDetails extends Component {

    componentDidMount() {
        this.props.isShowSideBar(false)
    };

    componentWillUnmount() {
        this.props.isShowSideBar(true)
    };

    renderItems() {
        const { getData, comments, getVideoData, type, itemId, onDeliteComment, onAddComment, getPerson } = this.props;

        if (type === "person") {
            return <ItemPersonDetails
                itemId={itemId}
                getPerson={getPerson}
            />
        };

        return <ItemVideoDetails
            type={type}
            itemId={itemId}
            getData={getData}
            getVideoData={getVideoData}
            comments={comments}
            onAddComment={onAddComment}
            onDeliteComment={onDeliteComment}
        />
    };

    render() {

        const item = this.renderItems();

        return (
            <div className="itemDetails">
                {item}
            </div>
        );
    };
};

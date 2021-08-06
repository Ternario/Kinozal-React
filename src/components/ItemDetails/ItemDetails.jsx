import React, { Component } from 'react';
import ItemVideoDetails from './ItemVideoDetails/ItemVideoDetails';
import ItemPersonDetails from './ItemPersonDetails/ItemPersonDetails'

export default class ItemDetails extends Component {

    componentDidMount() {
        this.props.isShowSideBar(false)
    };

    componentWillUnmount() {
        this.props.isShowSideBar(true)
    };

    renderItems() {
        const { getData, comments, getVideoData, type, itemId, onDeliteComment, onAddComment, getPerson, getPersonVideoData } = this.props;

        if (type === "person") {
            return <ItemPersonDetails
            getPerson={getPerson}
            getPersonVideoData={getPersonVideoData}
            />
        }

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
            <>
                {item}
            </>
        );
    }
}

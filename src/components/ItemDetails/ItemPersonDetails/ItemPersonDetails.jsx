import React, { Component } from 'react';
import "./ItemPersonDetails.scss"
import Person from './Person/Person';
import PersonVideo from './PersonVideo/PersonVideo';

export default class ItemDetails extends Component {

    state = {
        itemPerson: null,
        itemVideo: null
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
        const { itemId, getPerson } = this.props;

        getPerson(itemId)
            .then(({itemPerson, itemVideo}) => {
                this.setState({
                    itemPerson,
                    itemVideo
                });
            });
    };

    render() {

        const { itemPerson, itemVideo } = this.state;

        if (!itemPerson) {
            return <div>loading...</div>
        };

        return (
            <div className="itemDetails-itemPersonDetails" >
                <Person person={itemPerson} />
                <PersonVideo personVideoData={itemVideo} />
            </div>
        );
    };
};

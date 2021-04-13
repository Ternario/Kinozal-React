import React, { Component } from 'react';

export default class ItemFooter extends Component {

    getComments(item, func) {
        return item.map(({ id, profile, name, comment }) => {
            return (
                <div key={id}
                    onClick={() => { func(id) }}
                    className="comments-wrapper">
                    <div className="comments-wrapper__name">
                        <img src={profile} alt="ava" className="image" />
                        <div className="name">{name}</div>
                    </div>
                    <div className="comments-wrapper__comment">{comment}</div>
                </div>

            );
        });
    }

    render() {
        const { comments, onDeliteComment } = this.props;

        if (!comments) {
            return <div>loading...</div>
        }

        const item = this.getComments(comments, onDeliteComment);

        return (

            <div className="itemDetails-footer__comments">
                <h2 className="title">Comments</h2>
                {item}
            </div>

        );
    }
}
import React, { Component } from 'react';

export default class ItemFooter extends Component {

    getComments(item, deliteComment) {
        return item.map(({ id, profile, name, date, comment }) => {
            return (
                <div key={id} className="comments-wrapper">
                    <div className="comments-wrapper__name">
                        <div className="wrapper">
                            <img src={profile} alt="ava" className="image" />
                            <div className="name">{name}</div>
                        </div>
                        <div className="date">{date}</div>
                    </div>
                    <div className="comments-wrapper__comment">
                        <div className="comment">{comment}</div>
                        <div className="delite-comment">
                            <div className="delite"
                                onClick={() => { deliteComment(id) }}>
                                Delite comment
                            </div>
                        </div>
                    </div>
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
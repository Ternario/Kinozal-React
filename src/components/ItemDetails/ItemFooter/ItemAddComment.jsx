import React, { Component } from 'react';

export default class ItemAddComment extends Component {

    render() {

        return (
            <div className="itemDetails-footer__addComment">
                <h2 className="title">Leave a comment</h2>
                <div className="addComment-form">
                    <form action="" method="post">
                        <div className="form-group">
                            <input className="input-name" type="text" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <textarea className="text" placeholder="Write your comment here"></textarea>
                        </div>
                        <button className="btn">Post</button>
                    </form>
                </div>
            </div>
        );
    }
}
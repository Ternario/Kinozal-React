import React, { Component } from 'react';

export default class ItemAddComment extends Component {

    state = {
        name: "",
        comment: ""
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeComment = (e) => {
        this.setState({
            comment: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const date = new Date().toLocaleString() + '';

        const { name, comment } = this.state;

        this.props.onAddComment(name, date, comment);

        this.setState({
            name: "",
            comment: ""
        });
    }

    render() {

        const { name, comment } = this.state;

        return (
            <div className="itemDetails-footer__addComment">
                <h2 className="title">Leave a comment</h2>
                <div className="addComment-form">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <input
                                className="input-name"
                                type="text"
                                placeholder="Your name"
                                onChange={this.onChangeName}
                                value={name}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                className="text"
                                placeholder="Write your comment here"
                                onChange={this.onChangeComment}
                                value={comment}
                            />
                        </div>
                        <button type="submit" className="btn">Post</button>
                    </form>
                </div>
            </div>
        );
    }
}
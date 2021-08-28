import React, { Component } from 'react';

export default class ItemAddComment extends Component {

    state = {
        name: "",
        comment: "",
        isName: true,
        isComment: true
    };

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    };

    onChangeComment = (e) => {
        this.setState({
            comment: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();

        const date = new Date().toLocaleString() + '';

        const { name, comment } = this.state;

        if (name === "" && comment === "") {
            return this.setState({
                name: "",
                comment: "",
                isName: false,
                isComment: false
            });

        } else if (name === "" && comment !== "") {
            return this.setState({
                name: "",
                isName: false,
                isComment: true
            });

        } else if (comment === "" && name !== "") {
            return this.setState({
                comment: "",
                isComment: false,
                isName: true
            });

        } else {
            this.props.onAddComment(name, date, comment);

            this.setState({
                name: "",
                comment: "",
                isName: true,
                isComment: true
            });
        };
    };

    render() {

        const { name, comment, isName, isComment } = this.state;

        return (
            <div className="itemDetails-footer__addComment">
                <h2 className="title">Leave a comment</h2>
                <div className="addComment-form">
                    <form onSubmit={this.onSubmit} >
                        <div className="form-group">
                            <input
                                className={isName ? "input-name" : "input-name error"}
                                type="text"
                                placeholder="Your name"
                                onChange={this.onChangeName}
                                value={name}
                            />

                            {!isName ? <div>Fill the Name</div> : null}
                        </div>
                        <div className="form-group">
                            <textarea
                                className={isComment ? "text" : "text error"}
                                placeholder="Write your comment here"
                                onChange={this.onChangeComment}
                                value={comment}
                            />
                            {!isComment ? <div>Write text</div> : null}
                        </div>
                        <button type="submit" className="btn">Post</button>
                    </form>
                </div>
            </div>
        );
    };
};
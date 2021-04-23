import React, { Component } from 'react';

export default class Authorization extends Component {

    state = {
        login: "",
        password: ""
    }

    onChangeName = (e) => {
        this.setState({
            login: e.target.value
        });
    }

    onChangeComment = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        const { login, password } = this.state;

        this.props.autorization(login, password);

        this.setState({
            login: "",
            password: ""
        });
    }

    render() {

        const { login, password } = this.state

        return (
            <div className="sideBar-authorization">
                <div className="sideBar-authorization__label">
                    <h3 className="label">Sign In</h3>
                </div>
                <form className="sideBar-authorization__form" onSubmit={this.onSubmit}>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            className="login"
                            placeholder="login"
                            onChange={this.onChangeName}
                            value={login}
                        />
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="password"
                            className="password"
                            placeholder="Password"
                            onChange={this.onChangeComment}
                            value={password}
                        />
                    </div>
                    <div className="input-wrapper">
                        <button type="submit" className="form-btn">Sign In</button>
                    </div>
                </form>
            </div>
        );
    }
}


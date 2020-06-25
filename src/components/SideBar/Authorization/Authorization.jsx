import React from 'react';

const Authorization = () => {
    return (
        <div className="sideBar-authorization">
            <div className="sideBar-authorization__label">
                <h3 className="label">Sign In</h3>
            </div>
            <div className="sideBar-authorization__form">
                <form action="login">
                    <div className="input-wrapper">
                        <input type="text" className="login" placeholder="login" />
                    </div>
                    <div className="input-wrapper">
                        <input type="password" className="password" placeholder="Password" />
                    </div>
                    <div className="input-wrapper">
                        <button className="form-btn">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Authorization;
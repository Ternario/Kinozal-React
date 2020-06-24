import React from 'react';

const FormSignIn = () => {
    return (
        <div className="forms-SignIn">
            <input type="text" className="login" placeholder="login" />
            <input type="password" className="password" placeholder="Password" />
            <button className="forms-btn">login</button>
        </div>
    );
}

export default FormSignIn;
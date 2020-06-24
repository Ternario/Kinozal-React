import React from 'react';

const FormSignUp = () => {
    return (
        <div className="forms-SignUp">
            <input type="text" className="login" placeholder="login" />
            <input type="password" className="password" placeholder="Password" />
            <button className="forms-btn">Send</button>
        </div>
    );
}

export default FormSignUp;
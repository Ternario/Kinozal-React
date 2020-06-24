import React from 'react';
import FormSignIn from './FormSignIn/FormSignIn';
import FormSignUp from './FormSignUp/FormSignUp';

const Forms = () => {
    return (
        <div className="sideBar-authorization__forms">
            <FormSignIn />
            <FormSignUp />
        </div>
    );
}

export default Forms;
import React from 'react';

const Buttons = (props) => {
    return (
        <div className={props.name}>
            <span className="left"></span>
            <span className="right"></span>
        </div>
    );
}

export default Buttons;
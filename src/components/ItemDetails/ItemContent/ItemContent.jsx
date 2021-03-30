import React from 'react';

const ItemContent = () => {
    return (
        <div className="moviesItem-itemContent">
            <div className="moviesItem-itemContent__description">
                <div className="item-title"></div>
                <div className="item-description">Description:</div>
            </div>
            <div className="moviesItem-itemContent__trailer">
                <div className="trailer"></div>
            </div>
        </div>
    );
}

export default ItemContent;
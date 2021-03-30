import React from 'react';

const ItemFooter = () => {
    return (
        <div className="moviesItem-itemFooter">
            <div className="moviesItem-itemFooter__comments">
                <div className="item-title">Comments: </div>
                <div className="item-wrapper">
                    <div className="item-wrapper__name"></div>
                    <div className="item-wrapper__comment"></div>
                </div>
            </div>
            <div className="moviesItem-itemFooter__addComments">
                <div className="item-title">leave a comment:</div>
                <div className="item-form">
                    <form action="" method="post">
                        <input className="inputs" type="text" placeholder="Your name"/>
                        <input className="inputs" type="email" name="" id="" placeholder="Your email"/>
                        <input className="inputs" type="text" placeholder="Write your comment here"/>
                        <button className="btn"></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ItemFooter;
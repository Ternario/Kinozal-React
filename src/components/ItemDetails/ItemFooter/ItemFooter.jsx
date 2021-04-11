import React from 'react';

const ItemFooter = () => {
    return (
        <div className="itemDetails-footer">
            <div className="itemDetails-footer__comments">
                <h2 className="title">Comments</h2>
                <div className="comments-wrapper">
                    <div className="comments-wrapper__name">
                        <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=170667a&w=0&h=7XdJ-qzwSni92-B7nN6TlRF_u8d50RcA8adlGKLIDYc=" alt="ava" className="image" />
                        <div className="name">Fjgfhug Fjkgnjgh</div>
                    </div>
                    <div className="comments-wrapper__comment">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut soluta velit ab corrupti adipisci omnis ratione, voluptatem a suscipit quis. Eos vero iste voluptatem autem sapiente illum mollitia ea assumenda?
                        Reiciendis officiis adipisci beatae, non animi aspernatur quo inventore vitae nisi expedita hic ipsa minima ratione sit blanditiis molestias enim laudantium rem, sequi optio ipsam debitis ducimus? Odit, ipsum quam.
                        Ea rem placeat nam, repudiandae fugiat ut consequuntur! Dignissimos at iste perferendis voluptatem eligendi tempora, earum corporis veritatis aperiam odio, nostrum eaque eveniet? Repudiandae voluptatibus nihil autem, optio expedita blanditiis?
                    </div>
                </div>
            </div>
            <div className="itemDetails-footer__addComment">
                <h2 className="title">Leave a comment</h2>
                <div className="addComment-form">
                    <form action="" method="post">
                        <div className="form-group">
                            <input className="input-name" type="text" placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <textarea className="text" placeholder="Write your comment here"></textarea>
                        </div>
                        <button className="btn">Post</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ItemFooter;
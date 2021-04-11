import React from 'react';

const ItemContent = ({ title, type, content, trailer, rank, likesCount, commentsCount }) => {

    let changeCase = (item) => {
        return item.toLowerCase()
    }

    const item = changeCase(type)

    return (
        <div className="itemDetails-content">
            <div className="itemDetails-content__description">
                <h2 className="title">{`About ${item} ${title}`}</h2>
                <div className="description">{content}</div>
            </div>
            <div className="itemDetails-content__trailer">
                <iframe className="trailer" src={trailer}  title='video'></iframe>
                <div className="itemBar">
                    <div className="item">Rank: {rank}</div>
                    <div className="item">Like: {likesCount}</div>
                    <div className="item">Comments: {commentsCount}</div>
                </div>
            </div>
        </div>
    );
}

export default ItemContent;
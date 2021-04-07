import React from 'react';

const ItemHeader = ({ title, poster, year, rank, director, writer, genres }) => {

    return (

        <div className="itemDetails-header">
            <h2 className="title">{title}</h2>
            <div className="itemDetails-header__wrapper">
                <div className="item-poster">
                    <img src={poster} alt="poster" className="poster" />
                </div>
                <div className="items-info">
                    <div className="items">
                        <div className="item-title">Year:</div>
                        <div className="item">{year}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Rank:</div>
                        <div className="item">{rank}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Director:</div>
                        <div className="item">{director}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Writer:</div>
                        <div className="item">{writer}</div>
                    </div>
                    <div className="items">
                        <div className="item-title">Genres:</div>
                        <div className="item">{`${genres},`}</div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ItemHeader;


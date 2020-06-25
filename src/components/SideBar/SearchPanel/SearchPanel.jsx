import React from 'react';
import search from '../../../img/icons-search.png'

const SearchPanel = () => {
    return (
        <div className="sideBar-searchPanel">
            <div className="sideBar-searchPanel__label">
                <h3 className="label">Search</h3>
            </div>
            <div className="sideBar-searchPanel__form">
                <form action="search">
                    <div className="wrapper-form">
                        <input type="search" className="inputSearch" placeholder="Site search" />
                        <button className="searchBtn"> 
                            <img src={search} alt="search" className="searchBtn-image" />
                        </button>
                    </div>
                </form>
                
            </div>
        </div>
    );
}

export default SearchPanel;
import React from 'react';
import search from '../../../../img/icons-search.png';

const SearchPanel = ({ name, searchItem, getItems,changeFocus }) => {


    return (
        <div className="header-navbar__searchPanel">
            <form className="wrapper-form" onSubmit={getItems}>
                <input
                    type="search"
                    className="inputSearch"
                    placeholder="Site search"
                    onChange={searchItem}
                    value={name}
                    onFocus={()=> {
                        changeFocus(true)
                    }}
                    onBlur={()=> {
                        changeFocus(false)
                    }}
                />
                <button type="submit" className="searchBtn">
                    <img src={search} alt="search" className="searchBtn-image" />
                </button>
            </form>
        </div>
    );
};

export default SearchPanel;


import React from 'react';
import ItemHeader from './ItemHeader/ItemHeader';
import ItemContent from './ItemContent/ItemContent';
import ItemFooter from './ItemFooter/ItemFooter';

const MoviesItem = () => {
    return (
        <div className="moviesItem">
            <ItemHeader />
            <ItemContent />
            <ItemFooter />
        </div>
    );
}

export default MoviesItem;
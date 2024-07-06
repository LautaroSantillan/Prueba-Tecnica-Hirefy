'use client'

import React from 'react';
import './styles.css';

const FilterBar = ({ setFilter }) => {
    return (
        <div className='filter-bar'>
            <button onClick={() => setFilter('All')}>All</button>
            <button onClick={() => setFilter('Feat')}>Feat</button>
            <button onClick={() => setFilter('Fix')}>Fix</button>
        </div>
    );
}

export default FilterBar;
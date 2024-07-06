'use client';

import React from 'react';
import './styles.css';

const Chip = ({ type }) => {
    const getColor = (type) => {
        switch (type) {
            case 'Feat':
                return '#1CB59C'; 
            case 'Fix':
                return '#FFB800'; 
            default:
                return '#F56565'; 
        }
    };

    const getColorFont = (type) => {
        switch (type) {
            case 'Feat':
                return '#D3FFF5'; 
            case 'Fix':
                return '#FFF8E5'; 
            default:
                return '#FFDFDF'; 
        }
    };

    return (
        <span className='chip' style={{ backgroundColor: getColor(type), color: getColorFont(type) }}>
            {type}
        </span>
    );
};

export default Chip;

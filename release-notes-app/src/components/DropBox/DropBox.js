import React, { useState } from 'react';
import './styles.css'; 

const DropBox = ({ onSelectChange }) => {
    const [selectedOption, setSelectedOption] = useState('All');

    const handleChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        onSelectChange(selectedValue);
    };

    return (
        <div className='DropBox'>
            <select className='DropBox-select' value={selectedOption} onChange={handleChange}>
                <option value='All'>All</option>
                <option value='Feat'>Feat</option>
                <option value='Fix'>Fix</option>
            </select>
        </div>
    );
}

export default DropBox;

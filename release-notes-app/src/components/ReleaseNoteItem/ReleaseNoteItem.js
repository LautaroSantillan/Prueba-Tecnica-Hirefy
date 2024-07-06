'use client'

import React from 'react';
import './styles.css';

const ReleaseNoteItem = ({ change }) => {
    return (
        <div className='release-note-item'>
            <h3>{change.title}</h3>
            <p>{change.description}</p>
        </div>
    );
}

export default ReleaseNoteItem;
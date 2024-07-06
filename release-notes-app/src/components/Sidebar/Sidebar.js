'use client';

import React from 'react';
import './styles.css';
import versionsData from '../../data/allVersions.json';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <h3>All Releases Notes</h3>
            <ul>
                {versionsData.version.map((version, index) => (
                    <li key={index}>{version.title}: {version.description}</li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;

'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar/Sidebar';
import DropBox from './DropBox/DropBox';
import Chip from './Chip/Chip';

import releasesData from '../data/releases.json';
import allReleaseData from '../data/allVersions.json';
import '../styles/styles.css';

const ReleaseNotes = () => {
    const [filter, setFilter] = useState('All');
    const [releases, setReleases] = useState(releasesData.releases[0].changes);
    const [versions, setVersions] = useState(allReleaseData.version);

    useEffect(() => {
        if (filter === 'All') {
            setReleases(releasesData.releases[0].changes);
        } else {
            const filteredReleases = releasesData.releases[0].changes.filter(change => change.type === filter);
            setReleases(filteredReleases);
        }
    }, [filter]);

    const handleFilterChange = (selectedOption) => {
        setFilter(selectedOption);

        if (selectedOption === 'All') {
            setReleases(releasesData.releases[0].changes);
        } else {
            const filteredReleases = releasesData.releases[0].changes.filter(change => change.type === selectedOption);
            setReleases(filteredReleases);
        }
    };

    return (
        <div className='grid-container'>
            <div className='content-container'>
                <div className='content'>
                    <div className='title-box'>
                        <h2>Release 6.5</h2>
                        <div className='div-box'>
                            <p>Sort by:</p>
                            <DropBox onSelectChange={handleFilterChange} />
                        </div>
                    </div>
                    <hr />
                    {releases.map((release, index) => (
                        <div key={index} className='release-note'>
                            <h3>{release.title}</h3>
                            <div className='release-header'>
                                <Chip type={release.type} />
                                <p>{release.date}</p>
                            </div>
                            <p className='release-description'>{release.description}</p>
                            {release.image && <img src={release.image} alt={release.title} />}
                            {release.list && (
                                <ul className='list-bugs'>
                                    {Object.values(release.list[0]).map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <div className='sidebar-container'>
                <Sidebar />
            </div>
        </div>
    );
}

export default ReleaseNotes;

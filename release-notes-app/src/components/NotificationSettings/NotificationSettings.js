'use client'

import React, { useState } from 'react';
import "./styles.css";

const NotificationSettings = () => {
    const [custom, setCustom] = useState({
        inbox: 'Default',
        email: 'Default',
        browser: 'Default',
        mobile: 'Default',
    });

    const handleChange = (type, value) => {
        setCustom({
            ...custom,
            [type]: value
        });
    };

    return (
        <div className="notification-settings">
            {['Inbox', 'Email', 'Browser', 'Mobile'].map((type) => (
                <div key={type} className="notification-item">
                    <div className="notification-label">{type}</div>
                    <select 
                        value={custom[type.toLowerCase()]} 
                        onChange={(e) => handleChange(type.toLowerCase(), e.target.value)}
                    >
                        <option value="Default">Default</option>
                        <option value="Focused">Focused</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
            ))}
        </div>
    );
};

export default NotificationSettings;

'use client'

import React, { useState } from 'react';
import "./styles.css";

const EditSprintFolder = () => {
    const [form, setForm] = useState({
        name: 'Weekly sprint (6/17 - 6/21)',
        template: 'Weekly template',
        duration: '2 weeks',
        timezone: 'GMT +01:00 Africa/Lagos (WAT)',
        dateFormat: 'MM/DD'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    return (
        <div className="edit-sprint-folder">
            <label>
                Sprint name
                <input 
                    type="text" 
                    name="name" 
                    value={form.name} 
                    onChange={handleChange} 
                />
            </label>
            <label>
                Default template
                <input 
                    type="text" 
                    name="template" 
                    value={form.template} 
                    onChange={handleChange} 
                />
            </label>
            <label>
                Sprint duration
                <select 
                    name="duration" 
                    value={form.duration} 
                    onChange={handleChange}
                >
                    <option value="1 week">1 week</option>
                    <option value="2 weeks">2 weeks</option>
                </select>
            </label>
            <label>
                Date format
                <select 
                    name="dateFormat" 
                    value={form.dateFormat} 
                    onChange={handleChange}
                >
                    <option value="MM/DD">MM/DD</option>
                    <option value="DD/MM">DD/MM</option>
                </select>
            </label>
            <label>
                Sprint timezone
                <select 
                    name="timezone" 
                    value={form.timezone} 
                    onChange={handleChange}
                >
                    <option value="GMT +01:00 Africa/Lagos (WAT)">GMT +01:00 Africa/Lagos (WAT)</option>
                </select>
            </label>
        </div>
    );
};

export default EditSprintFolder;

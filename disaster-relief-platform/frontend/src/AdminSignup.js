// frontend/src/AdminSignup.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminSignup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/signup/admin', { username, password });
            alert('Admin Signup successful!');
            setUsername('');
            setPassword('');
        } catch (error) {
            console.error('Error during admin signup:', error);
            alert('Admin Signup failed!');
        }
    };

    return (
        <div>
            <h2>Admin Signup</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default AdminSignup;

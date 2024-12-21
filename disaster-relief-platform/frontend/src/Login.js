import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Corrected to use useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/login', { username, password });
            const token = response.data.token;
            localStorage.setItem('token', token); // Store token in local storage

            // Decode the token to get user role
            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            const userRole = decodedToken.role;

            // Redirect based on user role using navigate()
            if (userRole === 'admin') {
                navigate('/admin/dashboard'); // Corrected to use navigate()
            } else if (userRole === 'volunteer') {
                navigate('/volunteer/dashboard'); // Corrected to use navigate()
            } else if (userRole === 'user') {
                navigate('/user/dashboard'); // Corrected to use navigate()
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('Login failed!');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Dashboard.css';  
const Dashboard = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        position: 'relative',
    };

    const linkStyle = {
        display: 'block',
        margin: '10px auto',
        textAlign: 'center',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor: '#4CAF50',
        color: 'white',
        textDecoration: 'none',
        width: '200px',
        transition: 'transform 0.3s',
    };

   
    return (
        <div style={containerStyle}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>Dashboard</h1>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Link to="/update-task-status'" style={linkStyle}>Update task status</Link>
                <Link to="/view-shelters" style={linkStyle}>View Shelters</Link>
                <Link to="/submit-report" style={linkStyle}>submit report</Link>
                <Link to="/profile" style={linkStyle}>view profile</Link>
                <Link to="/edit-profile" style={linkStyle}>Edit Profile</Link>
                <Link to="/contact-admin" style={linkStyle}>contact admin</Link>
               
            </div>
        
            <style>{`
                @keyframes slideIn {
                    from {
                        left: -100%;
                    }
                    to {
                        left: 0;
                    }
                }
            `}</style>
        </div>
    );
};

export default Dashboard;

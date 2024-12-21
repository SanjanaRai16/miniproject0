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
                <Link to="/view-disasters" style={linkStyle}>View Disasters</Link>
                <Link to="/view-shelters" style={linkStyle}>View Shelters</Link>
                <Link to="/post-sos" style={linkStyle}>Post SOS</Link>
                <Link to="/view-sos" style={linkStyle}>View SOS</Link>
                <Link to="/post-incident" style={linkStyle}>Post Incident</Link>
                <Link to="/manage-incident" style={linkStyle}>Manage Incident</Link>
                <Link to="/post-resource" style={linkStyle}>Post Resource</Link>
                <Link to="/manage-resource" style={linkStyle}>Manage Resource</Link>
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

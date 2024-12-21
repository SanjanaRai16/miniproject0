import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Dashboard.css';


const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Admin Dashboard</h1>
            <div className="dashboard-options">
                <Link to="/post-disaster">Post Disaster</Link>
                <Link to="/update-disaster">Update Disaster</Link>
                <Link to="/post-shelter">Post Shelter</Link>
                <Link to="/update-shelter">Update Shelter</Link>
                <Link to="/view-sources">View Sources</Link>
                <Link to="/view-emergency-sources">View Emergency Sources</Link>
                <Link to="/add-bank-details">Add Bank Details</Link>
                <Link to="/manage-bank-details">Manage Bank Details</Link>
                <Link to="/view-volunteers">View Volunteers</Link>
                <Link to="/view-volunteer-tasks">View Volunteer Tasks</Link>
                <Link to="/view-user-details">View User Details</Link>
            </div>
        </div>
    );
};

export default Dashboard;

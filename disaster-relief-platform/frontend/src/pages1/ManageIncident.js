import React from 'react';
import '../styles.css';  
const ManageIncident = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    return (
        <div style={containerStyle}>
            <h2>Manage Incidents</h2>
            <p>Incident 1: Under Review</p>
            <p>Incident 2: Resolved</p>
            <p>Incident 3: Pending</p>
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

export default ManageIncident;

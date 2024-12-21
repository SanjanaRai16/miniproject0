import React from 'react';
import '../styles.css';  
const EmergencyContact = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    const contactStyle = {
        padding: '15px',
        backgroundColor: '#9C27B0',
        color: '#fff',
        margin: '10px auto',
        borderRadius: '8px',
        display: 'inline-block',
    };

    return (
        <div style={containerStyle}>
            <h2>Emergency Contacts</h2>
            <div style={contactStyle}>
                <p>Police: 100</p>
                <p>Fire Brigade: 101</p>
                <p>Ambulance: 102</p>
            </div>
            <style>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
            `}</style>
        </div>
    );
};

export default EmergencyContact;

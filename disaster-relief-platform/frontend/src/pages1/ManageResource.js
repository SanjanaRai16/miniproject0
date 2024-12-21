import React from 'react';
import '../styles.css';  
const ManageResource = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    const itemStyle = {
        padding: '10px',
        backgroundColor: '#FFC107',
        color: '#000',
        margin: '10px auto',
        borderRadius: '8px',
        display: 'inline-block',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>Manage Resources</h2>
            <div style={itemStyle}>
                <p>Resource 1: Water Supply</p>
                <p>Resource 2: Medical Kit</p>
                <p>Resource 3: Food Packages</p>
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
                div:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default ManageResource;

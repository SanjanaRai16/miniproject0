import React from 'react';
import '../styles.css';  
const ViewDisasters = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        position: 'relative',
        textAlign: 'center',
        marginTop: '50px',
    };

    const boxStyle = {
        padding: '20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        borderRadius: '8px',
        display: 'inline-block',
        margin: '10px auto',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>View Disasters</h2>
            <div style={boxStyle}>
                <p>Disaster 1: Earthquake</p>
                <p>Disaster 2: Flood</p>
                <p>Disaster 3: Tornado</p>
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
                div:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default ViewDisasters;

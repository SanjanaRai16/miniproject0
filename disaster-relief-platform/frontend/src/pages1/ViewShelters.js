import React from 'react';
import '../styles.css';  
const ViewShelters = () => {
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
            <h2>View Shelters</h2>
            <div style={boxStyle}>
                <p>Shelter 1: Community Hall</p>
                <p>Shelter 2: School Building</p>
                <p>Shelter 3: Sports Arena</p>
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

export default ViewShelters;

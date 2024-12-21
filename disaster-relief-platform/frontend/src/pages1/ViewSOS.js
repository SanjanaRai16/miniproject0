import React from 'react';
import '../styles.css';  

const ViewSOS = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        position: 'relative',
        textAlign: 'center',
        marginTop: '50px',
    };

    const boxStyle = {
        padding: '20px',
        backgroundColor: '#FF5733',
        color: '#fff',
        borderRadius: '8px',
        display: 'inline-block',
        margin: '10px auto',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>View SOS</h2>
            <div style={boxStyle}>
                <p>SOS 1: Help Needed at Location A</p>
                <p>SOS 2: Immediate Medical Assistance</p>
                <p>SOS 3: Food Supply Required</p>
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

export default ViewSOS;

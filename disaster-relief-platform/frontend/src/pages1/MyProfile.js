import React from 'react';
import '../styles.css';  
const MyProfile = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    const profileStyle = {
        padding: '20px',
        backgroundColor: '#607D8B',
        color: '#fff',
        borderRadius: '8px',
        display: 'inline-block',
        margin: '10px auto',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>My Profile</h2>
            <div style={profileStyle}>
                <p>Name: John Doe</p>
                <p>Email: johndoe@gmail.com</p>
                <p>Role: Volunteer</p>
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

export default MyProfile;

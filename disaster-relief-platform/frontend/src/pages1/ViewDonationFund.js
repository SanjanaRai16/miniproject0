import React from 'react';
import '../styles.css';  
const ViewDonationFund = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    const cardStyle = {
        padding: '20px',
        backgroundColor: '#FF5722',
        color: '#fff',
        borderRadius: '8px',
        margin: '10px auto',
        width: '300px',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>Donation Fund</h2>
            <div style={cardStyle}>
                <p>Total Donations: $5,000</p>
                <p>Goal: $10,000</p>
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

export default ViewDonationFund;

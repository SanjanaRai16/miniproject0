import React from 'react';
import '../styles.css';  
const ViewAllResources = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    const listStyle = {
        padding: '10px',
        backgroundColor: '#8BC34A',
        color: '#fff',
        borderRadius: '8px',
        display: 'inline-block',
        margin: '10px auto',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>View All Resources</h2>
            <div style={listStyle}>
                <p>Water Bottles - 200 Units</p>
                <p>Blankets - 100 Units</p>
                <p>First Aid Kits - 50 Units</p>
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

export default ViewAllResources;

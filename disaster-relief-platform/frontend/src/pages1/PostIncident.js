import React from 'react';
import '../styles.css';  
const PostIncident = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    const inputStyle = {
        margin: '10px',
        padding: '10px',
        width: '250px',
        border: '2px solid #4CAF50',
        borderRadius: '8px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>Post Incident</h2>
            <form>
                <input type="text" placeholder="Incident Title" style={inputStyle} />
                <textarea placeholder="Incident Description" style={{ ...inputStyle, height: '100px' }} />
                <br />
                <button style={buttonStyle}>Report Incident</button>
            </form>
            <style>{`
                @keyframes slideIn {
                    from {
                        left: -100%;
                    }
                    to {
                        left: 0;
                    }
                }
                button:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default PostIncident;

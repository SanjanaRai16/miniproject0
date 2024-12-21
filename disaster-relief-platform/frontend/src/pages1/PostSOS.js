import React from 'react';
import '../styles.css';  
const PostSOS = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        position: 'relative',
        textAlign: 'center',
        marginTop: '50px',
    };

    const inputStyle = {
        margin: '10px',
        padding: '10px',
        width: '250px',
        border: '2px solid #4CAF50',
        borderRadius: '8px',
        outline: 'none',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '8px',
        transition: 'transform 0.3s',
    };

    return (
        <div style={containerStyle}>
            <h2>Post SOS</h2>
            <form>
                <input type="text" placeholder="SOS Title" style={inputStyle} />
                <textarea placeholder="SOS Description" style={{ ...inputStyle, height: '100px' }} />
                <br />
                <button style={buttonStyle}>Submit SOS</button>
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

export default PostSOS;

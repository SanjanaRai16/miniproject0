import React from 'react';
import '../styles.css';  
const PostResource = () => {
    const containerStyle = {
        animation: 'slideIn 1s ease-out',
        textAlign: 'center',
        marginTop: '50px',
    };

    const inputStyle = {
        margin: '10px',
        padding: '10px',
        width: '250px',
        border: '2px solid #2196F3',
        borderRadius: '8px',
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#2196F3',
        color: '#fff',
        border: 'none',
        borderRadius: '8px',
        transition: 'transform 0.3s',
        cursor: 'pointer',
    };

    return (
        <div style={containerStyle}>
            <h2>Post Resource</h2>
            <form>
                <input type="text" placeholder="Resource Title" style={inputStyle} />
                <textarea placeholder="Resource Details" style={{ ...inputStyle, height: '100px' }} />
                <br />
                <button style={buttonStyle}>Add Resource</button>
            </form>
            <style>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                button:hover {
                    transform: scale(1.05);
                }
            `}</style>
        </div>
    );
};

export default PostResource;

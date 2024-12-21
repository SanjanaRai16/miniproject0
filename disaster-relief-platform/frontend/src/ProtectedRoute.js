import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles, element }) => {
    // Retrieve the stored token
    const token = localStorage.getItem('token');
    
    if (!token) {
        // If no token exists, redirect to login page
        return <Navigate to="/login" />;
    }

    // Decode the token to get user role
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    const userRole = decodedToken.role;

    // Check if the user's role matches the allowed roles
    if (!allowedRoles.includes(userRole)) {
        // If the role doesn't match, redirect to login page
        return <Navigate to="/login" />;
    }

    // If user is authorized, render the element (protected component)
    return element;
};

export default ProtectedRoute;

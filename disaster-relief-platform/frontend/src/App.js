import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminSignup from './AdminSignup';
import UserSignup from './UserSignup';
import VolunteerSignup from './VolunteerSignup';
import Login from './Login';
import AdminDashboard from './AdminDashboard';
import UserDashboard from './UserDashboard';
import VolunteerDashboard from './VolunteerDashboard';

import ProtectedRoute from './ProtectedRoute';

// NotFound Component for handling 404 errors
const NotFound = () => {
    return (
        <div>
            <h2>404 - Page Not Found</h2>
            <p>The page you are looking for does not exist.</p>
        </div>
    );
};

function App() {
    return (
        <Router>
            <div className="App">
                <h1>Disaster Relief Coordination Platform</h1>
                <Routes>
                    {/* Public Signup Routes */}
                    <Route path="/signup/admin" element={<AdminSignup />} />
                    <Route path="/signup/user" element={<UserSignup />} />
                    <Route path="/signup/volunteer" element={<VolunteerSignup />} />
                    <Route path="/login" element={<Login />} />

                   

                    {/* Protected Routes */}
                    <Route 
                        path="/admin/dashboard" 
                        element={
                            <ProtectedRoute allowedRoles={['admin']} element={<AdminDashboard />} />} 
                    />
                    <Route 
                        path="/user/dashboard" 
                        element={
                            <ProtectedRoute allowedRoles={['user']} element={<UserDashboard />} />} 
                    />
                    <Route 
                        path="/volunteer/dashboard" 
                        element={
                            <ProtectedRoute allowedRoles={['volunteer']} element={<VolunteerDashboard />} />} 
                    />

                    {/* Catch-all Route for 404 Not Found */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

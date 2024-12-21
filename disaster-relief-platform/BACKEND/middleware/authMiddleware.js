// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

// Middleware to authenticate JWT tokens
function authenticateToken(req, res, next) {
    const token = req.headers['authorization'] && req.headers['authorization'].split(' ')[1];
    if (!token) return res.sendStatus(401);  // Unauthorized
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403);  // Forbidden
        req.user = user;
        next();
    });
}

// Middleware to authorize based on user role
function authorizeRoles(roles) {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ message: 'You do not have permission to access this resource' });
        }
        next();
    };
}

module.exports = { authenticateToken, authorizeRoles };

// backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

// Import custom middleware for authorization
const { authenticateToken, authorizeRoles } = require('./middleware/authMiddleware');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Define User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true } // 'admin', 'volunteer', or 'user'
});

const User = mongoose.model('User', userSchema);

// API routes for authentication
app.post('/signup/:role', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, role: req.params.role });
    
    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error creating user' });
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    
    if (!user) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
});

// Protected routes for role-based access
app.get('/admin/dashboard', authenticateToken, authorizeRoles(['admin']), (req, res) => {
    res.json({ message: 'Welcome to the Admin Dashboard', user: req.user });
});

app.get('/user/dashboard', authenticateToken, authorizeRoles(['user']), (req, res) => {
    res.json({ message: 'Welcome to the User Dashboard', user: req.user });
});

app.get('/volunteer/dashboard', authenticateToken, authorizeRoles(['volunteer']), (req, res) => {
    res.json({ message: 'Welcome to the Volunteer Dashboard', user: req.user });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

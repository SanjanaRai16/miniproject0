const express = require('express');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const User = require('../models/User');
const router = express.Router();

// User Dashboard - View own profile
router.get('/dashboard', protect, authorizeRoles(['user']), async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user); // Return the user's profile
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user profile' });
  }
});

// User Dashboard - Update own profile
router.put('/update', protect, authorizeRoles(['user']), async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.email = email || user.email;

    await user.save();
    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile' });
  }
});

module.exports = router;

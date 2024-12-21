const express = require('express');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const User = require('../models/User');
const Volunteer = require('../models/Volunteer');
const router = express.Router();

// Admin Dashboard - View all Users
router.get('/dashboard', protect, authorizeRoles(['admin']), async (req, res) => {
  try {
    const users = await User.find();
    res.json(users); // Return the list of all users
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

// Admin Dashboard - View all Volunteers
router.get('/volunteers', protect, authorizeRoles(['admin']), async (req, res) => {
  try {
    const volunteers = await Volunteer.find();
    res.json(volunteers); // Return the list of all volunteers
  } catch (error) {
    res.status(500).json({ message: 'Error fetching volunteers' });
  }
});

// Admin can update user role (e.g., promote volunteer to admin)
router.put('/update-role/:id', protect, authorizeRoles(['admin']), async (req, res) => {
  try {
    const { role } = req.body;
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.role = role; // Update the user role
    await user.save();
    res.json({ message: 'User role updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user role' });
  }
});

module.exports = router;

const express = require('express');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');
const Volunteer = require('../models/Volunteer');
const Task = require('../models/Task');  // Assuming a Task model exists to manage volunteer tasks
const router = express.Router();

// Volunteer Dashboard - View tasks assigned to the volunteer
router.get('/dashboard', protect, authorizeRoles(['volunteer']), async (req, res) => {
  try {
    const volunteer = await Volunteer.findById(req.user._id);
    if (!volunteer) {
      return res.status(404).json({ message: 'Volunteer not found' });
    }

    const tasks = await Task.find({ volunteerId: volunteer._id });
    res.json(tasks); // Return the list of tasks assigned to the volunteer
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks' });
  }
});

// Volunteer Dashboard - Update task status (e.g., mark as completed)
router.put('/task/:id', protect, authorizeRoles(['volunteer']), async (req, res) => {
  try {
    const { status } = req.body;
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }

    if (task.volunteerId.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'You do not have permission to update this task' });
    }

    task.status = status || task.status;
    await task.save();

    res.json({ message: 'Task status updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task' });
  }
});

module.exports = router;

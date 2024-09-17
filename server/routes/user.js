// routes/user.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const User = require('../models/User');

const router = express.Router();

// Protected route: Get logged-in user's profile
router.get('/profile', authMiddleware, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');  // Exclude password
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
});

module.exports = router;

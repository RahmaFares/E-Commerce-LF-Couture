const express = require('express');
const router = express.Router();
const ActivityLog = require('../models/ActivityLog');

router.get('/', async (req, res) => {
    try {
        const activities = await ActivityLog.find().sort({ timestamp: -1 }).limit(10); // Adjust the limit as needed
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const mongoose = require('mongoose');

router.get('/user-stats', async (req, res) => {
    try {
        const userStats = await User.aggregate([
            {
                $group: {
                    _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                    count: { $sum: 1 }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        res.status(200).json(userStats);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;

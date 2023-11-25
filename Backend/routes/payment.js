const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
require('dotenv').config();

// Initialize Stripe with the secret key from the environment variables
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

// POST endpoint for charging a payment
router.post('/charge', async (req, res) => {
    const { token, amount } = req.body;

    try {
        // Use Stripe's library to make a charge
        const charge = await stripe.charges.create({
            amount: amount,
            currency: 'usd',
            source: token,
            description: 'Payment for Leila Fares order',
        });
        if (charge.status !== 'succeeded') {
            throw new Error('Payment not successful');
        }


        // If the charge is successful, send a success response
        res.status(200).json({ success: true, charge });
    } catch (error) {
        console.error('Error in /charge:', error); // Log error for server side tracking
        res.status(500).json({ success: false, message: error.message });
    }
});

module.exports = router;

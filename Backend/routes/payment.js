// const express = require('express');
// const router = express.Router();
// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// router.post("/charge", (req, res) => {
//     const { amount, token } = req.body;

//     stripe.charges.create({
//         amount,
//         currency: "usd",
//         source: token,
//         description: "Payment Charge",
//     }, (err, charge) => {
//         if (err) {
//             res.status(500).send({ error: err.message });
//         } else {
//             res.status(200).send({ success: true });
//         }
//     });
// });

// module.exports = router;

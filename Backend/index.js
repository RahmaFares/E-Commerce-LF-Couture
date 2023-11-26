require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require('path');

// Import routes
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const paymentRoute = require('./routes/payment');
// Uncomment below as needed
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");

const app = express();

// Database Connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.error("DB Connection Error: ", err);
        process.exit(1); // Exit process with failure
    });

// Middlewares
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON bodies
app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the public directory

// Route middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use('/api/payment', paymentRoute);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

// Error handling middleware
app.use((error, req, res, next) => {
    console.error(error); // Log the error for server-side tracking
    res.status(error.status || 500).json({
        message: error.message || "An internal server error occurred.",
        error: error,
    });
});

app.get('/reset-password/:token', async (req, res) => {
    const resetToken = req.params.token;

    try {
        // Assuming you have a User model with a resetPasswordToken field
        const user = await User.findOne({
            resetPasswordToken: resetToken,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            // Token is invalid or has expired
            return res.status(400).json({ error: "Token is invalid or has expired" });
        }

        // Render the password reset form here
        // You can use a template engine like EJS or send an HTML file as a response

        // Example using EJS:
        // res.render('reset-password', { token: resetToken });

        // Example sending an HTML file:
        // res.sendFile(path.join(__dirname, 'public', 'reset-password.html'));

    } catch (err) {
        console.error("Error during password reset:", err);
        res.status(500).json("There was an error resetting the password.");
    }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}!`);
});
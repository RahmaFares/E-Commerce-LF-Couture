require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

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

// Route middlewares
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use('/api/payment', paymentRoute);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend server is running on port ${PORT}!`);
});

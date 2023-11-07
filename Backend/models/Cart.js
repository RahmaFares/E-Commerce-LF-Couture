// const mongoose = require("mongoose")
// //creating user schema

// const CartSchema = new mongoose.Schema(
//     {
//         //every user has one cart
//         userID: { type: String, required: true }, //type, and required and unique
//         products: [
//             {
//                 productID: { type: String, required: true },
//                 quantity: { type: Number, default: 1 },
//             }
//         ],

//     },
//     { timestamps: true }

// );

// module.exports = mongoose.model("Cart", CartSchema);
// const mongoose = require("mongoose")
// //creating user schema

// const OrderSchema = new mongoose.Schema(
//     {
//         //every user has one cart
//         userID: { type: String, required: true }, //type, and required and unique
//         products: [
//             {
//                 productID: { type: String, required: true },
//                 quantity: { type: Number, default: 1 },
//             }
//         ],
//         amount: { type: Number, required: true },
//         address: { type: Object, required: true },
//         status: { type: String, default: "pending" },
//     },
//     { timestamps: true }

// );

// module.exports = mongoose.model("Order", OrderSchema);
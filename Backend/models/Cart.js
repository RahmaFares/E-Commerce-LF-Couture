const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, required: true, min: [1, 'Quantity can not be less then 1.'] },
        },
    ],
}, { timestamps: true });

module.exports = mongoose.model("Cart", CartSchema);

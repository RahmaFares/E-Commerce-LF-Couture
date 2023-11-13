const router = require("express").Router();
const Cart = require("../models/Cart");
const { verifyToken } = require("./verifyToken");

// Add item to cart
router.post("/add", verifyToken, async (req, res) => {
    const userId = req.user.id; // Extracted from token
    const { productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });
        if (cart) {
            // User already has a cart, add item
        } else {
            // No cart for user, create new cart
            cart = new Cart({ userId, items: [{ productId, quantity }] });
        }
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;

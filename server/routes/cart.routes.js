const express = require("express");
const cartRouter = express.Router();
const CartModel = require("../modals/cart.modal"); // Ensure path is correct

// Create a new cart or update an existing one

cartRouter.post("/cart", async (req, res) => {  
    
    const { userId, products } = req.body;
    try {
        let cart = await CartModel.findOne({ userId });
        if (cart) {
        // Update existing cart
        cart.products = products;
        await cart.save();
        return res.status(200).json(cart);
        } else {
        // Create new cart
        const newCart = new CartModel({ userId, products });
        await newCart.save();
        return res.status(201).json(newCart);
        }
    } catch (error) {
        console.error("Error saving cart:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
});
module.exports = cartRouter;

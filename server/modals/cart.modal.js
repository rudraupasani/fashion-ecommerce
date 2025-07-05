const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },

    products: [
      {
        productId: { type: String, required: true },
        quantity: { type: Number, default: 1 },
        category: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true },
      },
    ],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields automatically
);

const Cart = mongoose.model("Cart", cartSchema); // Capitalized 'Cart' for naming convention
module.exports = Cart;

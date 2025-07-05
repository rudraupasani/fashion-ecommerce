const express = require("express");
const proRouter = express.Router();
const ProductModel = require("../modals/product.modal"); 


proRouter.post("/products", async (req, res) => {
  try {
    const { name, description, price, category , image } = req.body;
    
    if (!name || !description || !price || !category || !image) {
      return res.status(400).json({ error: "All fields are required" });
    }


    const product = new ProductModel({
      name,
      description,
      image, 
      price,
      category,
    });

    await product.save();

    res.status(201).json({ message: "Product created successfully", product });
  } catch (error) {
    console.error("Error Creating Product:", error);
    res.status(500).json({ message: "Product is Not Created", error });
  }
});

proRouter.get("/products", async (req, res) => {

  try {
    const products = await ProductModel.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error Fetching Products:", error);
    res.status(500).json({ message: "Failed to fetch products", error });
  }
});
module.exports = proRouter;

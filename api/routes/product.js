import express from "express";
import Product from "../models/Product.js";
const productRoute = express.Router();

//Create product
productRoute.post("/", async(req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
        
    } catch (error) {
        res.status(500).json(error)
    }
});



export default productRoute;
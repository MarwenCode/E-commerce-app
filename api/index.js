import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";



//define app
const app = express();
dotenv.config();


//MONGO
const connect = async () => {
    try {
      await mongoose.connect(process.env.MONGO);
      console.log("connected to MongoDB");
    } catch (error) {
      throw error;
    }
  };










//middlewares
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute)






//port
app.listen(process.env.PORT , () => {
    connect();
    console.log("connected to backend");
  });
  
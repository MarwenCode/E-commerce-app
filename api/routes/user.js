import express from "express";
import User from "../models/User.js";
const userRoute = express.Router();
import bcrypt from "bcrypt";

//Register
userRoute.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

//login
userRoute.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("wrong email");

    res.status(200).json(user);
    console.log(req.body);
  } catch (error) {
    res.status(500).json(error);
  }
});

export default userRoute;

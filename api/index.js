import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./routes/user.js";
import productRoute from "./routes/product.js";
import cartRoute from "./routes/cart.js";
import cors from "cors";
// import stripe from "stripe" 
// 'sk_test_51Lvqh6HwI94ltRkFBsX4k7o7r6uzipJS7Vwib1l3QriqaLwRRQ7ufgC7LqwE9OYo4lQXKUvEaY4VTR2RPdJIxnNe00Vef5S6R2'


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


//stripe 
//sk_test_51Lvqh6HwI94ltRkFBsX4k7o7r6uzipJS7Vwib1l3QriqaLwRRQ7ufgC7LqwE9OYo4lQXKUvEaY4VTR2RPdJIxnNe00Vef5S6R2
//Apple : price_1LvqoHHwI94ltRkFNG6hfKl9
// Samsung: price_1LvqpCHwI94ltRkF1k1rR5Hq
// Huawei: price_1LvqqIHwI94ltRkF8fD3vJni

// const stripe = 'sk_test_51Lvqh6HwI94ltRkFBsX4k7o7r6uzipJS7Vwib1l3QriqaLwRRQ7ufgC7LqwE9OYo4lQXKUvEaY4VTR2RPdJIxnNe00Vef5S6R2';
// app.post("/checkout", async (req, res) => {
  /*
  req.body.items
  [
      {
          id: 1,
          quantity: 3
      }
  ]
  stripe wants
  [
      {
          price: 1,
          quantity: 3
      }
  ]
  */
//   console.log(req.body);
//   const items = req.body.items;
//   let lineItems = [];
//   items.forEach((item)=> {
//       lineItems.push(
//           {
//               price: item.id,
//               quantity: item.quantity
//           }
//       )
//   });

//   const session = await stripe.checkout.sessions.create({
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: "http://localhost:3000/success",
//       cancel_url: "http://localhost:3000/cancel"
//   });

//   res.send(JSON.stringify({
//       url: session.url
//   }));
// });



//middlewares
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute)

app.use(cors());
// app.use(express.static("public"));







//port
app.listen(process.env.PORT , () => {
    connect();
    console.log("connected to backend");
  });
  
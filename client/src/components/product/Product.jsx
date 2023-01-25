import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "./product.scss";

const Product = ({ item }) => {
  const { cart, dispatch, user } = useContext(AppContext);

  console.log(cart);
  const addToCart = async (id) => {
    const newCart = {
      userId: user._id,
      products: [
        {
          productId: item._id,
          // quantity: cart.length,
          price: item.price,
          title: item.title,
        },
      ],
    };

    try {
      const res = await axios.post("/cart", newCart);

      console.log(res);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }

    dispatch({ type: "addToCart", payload: id });
    toast.dark("Added to cart");
  };

  return (
    <div className="product">
      <div className="top">
        <img
          className="img"
          src={item.img}
          // src={item.img}
        />
      </div>
      <div className="center">
        <h3 className="title">{item.title} </h3>
        <div className="middle">
          <span className="brand">{item.brand} </span>
          <span className="price">{item.price + "$"} </span>
        </div>
      </div>
      <div className="down">
        <button className="btn" onClick={() => addToCart(item)}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;

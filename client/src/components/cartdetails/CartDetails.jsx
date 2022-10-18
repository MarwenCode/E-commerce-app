import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import CartItem from "../cartItem/CartItem";
import "./cartdetails.scss"

const CartDetails = () => {
  const { cart, quantity, total } = useContext(AppContext);
  console.log(cart);
  return (
    <div className="cartdetails">
      {cart.length === 0 ? (
        <div className="cart-items">
          <h2>Your Cart is Empty</h2>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </>
      )}

      <div className="cart-total">
        <h2>Cart items:{quantity}</h2>
        <span> {total} $</span>
      </div>
    </div>
  );
};

export default CartDetails;

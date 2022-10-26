import React, { useState, useContext } from "react";
import { AppContext } from "../../context/context";
import CartItem from "../cartItem/CartItem";
import PaymentModal from "../paymentModal/PaymentModal";
import "./cartdetails.scss";


const CartDetails = () => {
  const { cart, quantity, total,modalOpen, setModalOpen } = useContext(AppContext);
  console.log(cart);


  //   const checkout = async () => {
  //     await fetch('http://localhost:5500/checkout', {
  //         method: "POST",
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({items: cart.items})
  //     }).then((response) => {
  //         return response.json();
  //     }).then((response) => {
  //         if(response.url) {
  //             window.location.assign(response.url); // Forwarding user to Stripe
  //         }
  //     });
  // }

  return (
    <div  className={modalOpen ? "cartdetails" :"cartdetails" }  >
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
        <h2>Items: {quantity}</h2>
        <h2>Total : {total} $</h2>
      </div>

      
      {cart.length > 0 && (
        <>
          <button   className="purchase" 
          onClick={() => setModalOpen(true)}>Purchase items</button>
    
     


          
        </>
      )}
       
       {modalOpen && <PaymentModal />}

     
    
    </div>
  );
};

export default CartDetails;

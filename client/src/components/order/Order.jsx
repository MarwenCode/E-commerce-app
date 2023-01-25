import React, { useState } from "react";
import "./order.scss";

const Order = ({ item }) => {
  // const [status, setStatus] = useState("Out for delivery")

  // const delivred = () => {
  //     setStatus(status)
  // }

  return (
    <div className="order">
      <span className="id"> {item._id}</span>
      <span className="date">
        {new Date(item.createdAt).toLocaleString("de-DE")}
      </span>
      <span className="title">{item.title}</span>
      <span className="title">{item.quantity}</span>
      <span className="title">{item.status}</span>
    </div>
  );
};

export default Order;

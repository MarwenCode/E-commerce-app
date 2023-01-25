import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../../context/context";
import "./paymentModal.scss";
import { ToastContainer, toast } from "react-toastify";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import axios from "axios";

const PaymentModal = () => {
  const { modalOpen, setModalOpen, user } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [code, setCode] = useState("");

  //make an order
  //  const buyItems = (e) => {
  //   e.preventDefault();

  //   const newOrder = {
  //     userId: user._id

  //     // products:[ {
  //     //   productId: item.id,
  //     //   quantity:quantity

  //     // }

  //     // ]
  //   }
  //   try {
  //     const res = axios.post("/cart", newOrder)
  //     setOrder(res.data)
  //     console.log(res)
  //   }catch(error) {
  //     console.log(error)
  //   }
  //   buyItems()

  //  }

  const buyItems = () => {
    if (!cardNumber || !code || !name) {
      return;
    } else {
      toast.dark("Thank you for your purchase");
      setName("");
      setcardNumber("");
      setCode("");
    }
  };

  return (
    <div className="paymentModal">
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter card number"
            required
            value={cardNumber}
            onChange={(e) => setcardNumber(e.target.value)}
          />
          <BsFillCreditCard2BackFill className="card" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter card code "
            required
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-groupBtn">
          <button className="btn" onClick={(e) => buyItems(e)}>
            Submit
          </button>
          <button className="cancel" onClick={() => setModalOpen(false)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentModal;

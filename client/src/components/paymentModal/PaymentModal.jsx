import React, { useState, useContext } from "react";
import { AppContext } from '../../context/context'

const PaymentModal = () => {
    const { modalOpen, setModalOpen } = useContext(AppContext);
  return (
    <div className='paymentModal'>

        <form>
          <div className="form-group">
          <button  onClick={() => setModalOpen(false)}>X</button>
            <input
              type="text"
              className="form-control"
              placeholder="Enter card number"
              required
       
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter code card"
              required
           
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
             
            />
          </div>

          <div className="form-group">
            <button className="btn">Submit</button>
          </div>
        </form>
  

    </div>
  )
}

export default PaymentModal
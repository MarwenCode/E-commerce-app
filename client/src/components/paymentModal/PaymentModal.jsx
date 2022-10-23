import React, { useState, useContext } from "react";
import { AppContext } from '../../context/context';
import "./paymentModal.scss";
import { ToastContainer, toast } from 'react-toastify';

const PaymentModal = () => {
    const { modalOpen, setModalOpen } = useContext(AppContext);

    const [name, setName] = useState('')
    const [cardNumber, setcardNumber] = useState('')
    const [code, setCode] = useState('')

    const buyItems = () => {
      toast.dark("Thank you for your purchase")
      setName("")
      setcardNumber("")
      setCode("")
    }



  return (
    <div className='paymentModal'>

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
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Enter code card"
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
            <button className="btn" onClick={buyItems}>Submit</button>
            <button className="cancel" onClick={() => setModalOpen(false)}>Cancel</button>
           
          </div>
        </form>
       
  

    </div>
  )
}

export default PaymentModal

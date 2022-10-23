import React, {useContext} from 'react';
import "./cartitem.scss";
import  {FaAngleLeft} from 'react-icons/fa'
import  {FaAngleRight} from 'react-icons/fa'
import { AppContext } from '../../context/context';

const CartItem = ({ item }) => {
  const { cart, quantity, total,modalOpen, setModalOpen, increase,decrease,remove } = useContext(AppContext);
    console.log(item)
  return (
    <div className={modalOpen ? 'moadalActive' : 'cartitem'}  >
        <div className="item">
            <div className="right">
              <img
                src="images/phone3.png" 
               />
             
             
               <h3 className='title'> {item.title}</h3>
                <span className='price'> {item.price} $</span>

            
              
            </div>
            <div className="left">
            <button className='leftBtn' onClick={() => decrease(item._id)}>
            {/* <button className='leftBtn' > */}
           
           <FaAngleLeft  />
           </button> {item.quantity}
             
                <button className='rightBtn' onClick={() => increase(item._id)}>
                <FaAngleRight  />
                </button>
              
    

            </div>
            <div className="down">
                <button  className="remove"  onClick={() => remove(item._id)}>
                    Remove
                </button>
               
            

            </div>
            <div className="description">
              <p> {item.desc}  </p>
            </div>
        </div>

    </div>
  )
}

export default CartItem;

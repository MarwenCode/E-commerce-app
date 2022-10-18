import React, {useContext} from 'react';
import "./cartitem.scss";
import  {FaAngleLeft} from 'react-icons/fa'
import  {FaAngleRight} from 'react-icons/fa'
import { AppContext } from '../../context/context';

const CartItem = ({ item }) => {
    const {cart, increase } = useContext(AppContext);
    console.log(item)
  return (
    <div className='cartitem'>
        <div className="item">
            <div className="right">
              <img
                src="images/phone3.png" 
               />
                  <span className='title'> {item.title}</span>
                <span className='price'> {item.price} $</span>
            </div>
            <div className="left">
            <button className='leftBtn'>
           
           <FaAngleLeft />
           </button> {item.quantity}
             
                <button className='rightBtn' onClick={() => increase(item._id)}>
                <FaAngleRight  />
                </button>
              
    

            </div>
            <div className="remove">
                <button>
                    Remove
                </button>
               
            

            </div>
        </div>

    </div>
  )
}

export default CartItem;
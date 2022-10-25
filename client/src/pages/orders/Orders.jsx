import React , {useContext }from 'react';
import CartDetails from '../../components/cartdetails/CartDetails';
import Order from '../../components/order/Order';
import { AppContext } from '../../context/context';
import './orders.scss';


const Orders = () => {
  const { cart, quantity, total,modalOpen, setModalOpen } = useContext(AppContext);
  console.log(cart);
  return (
    <div className='orders'>
  

      
      <div className="orders-section">
      <div className='order'>
        <div className='order-headings'>
          <div>ID</div>
          <div>Date</div>
          <div>Product</div>
          <div>Quantity</div>
          <div>Status</div>
         
        </div>
        {cart.map((item) => (
              <Order     key={item.id} item={item} />
            ))}
       
      </div>


      </div>
      
    </div>
  )
}

export default Orders
import React, {useContext} from 'react';
import { AppContext } from '../../context/context';
import "./product.scss";


const Product = ({ item }) => {
  const { cart, addToCart } = useContext(AppContext)

  return (
    <div className='product'>
        <div className="top">
            <img 
            className='img'
            src="images/phone3.jpg"
            // src={item.img}

            
            
            />

        </div>
        <div className="center">
            <h3 className='title'>{item.title} </h3>
            <span className='brand'>{item.brand} </span>
            <span className='price'>{item.price +"$"} </span>

        </div>
        <div className="down">
            <button className='btn' onClick={() => addToCart(item)}>Add to cart</button>
        </div>
        
    </div>
  )
}

export default Product
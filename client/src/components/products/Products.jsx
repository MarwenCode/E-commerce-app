import React from 'react';
import { AppContext } from '../../context/context';
import Product from '../product/Product';
import "./products.scss"




const Products = ({ items}) => {
  

  return (
    <div className='products'>
        {items.map((item, index) => (

         <Product item={item} key={index}/>


        ))}
     
        
    </div>
  )
}

export default Products
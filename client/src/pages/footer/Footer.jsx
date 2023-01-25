import React from 'react';
import "./footer.scss"

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    
     <section className='footer'>
      <span>{`Copyright © Online shop  ${year}`}</span>
      
      </section>
  )
}

export default Footer
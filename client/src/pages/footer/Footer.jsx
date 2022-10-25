import React from 'react';
import "./footer.scss"

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    
     <section className='footer'>{`Copyright © Online shop  ${year}`}</section>
  )
}

export default Footer
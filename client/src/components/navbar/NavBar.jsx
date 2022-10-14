import React from "react";
import { Link } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import {IoLogoAndroid} from "react-icons/io"
import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="left">
      {/* <h1 className="title">Store</h1> */}
        <img className="logo"
        src="images/logo.jpg"
        
        />
       
      </div>

      <div className="center">
        <ul className="list">
        <Link to="contact" className="link">
            <li className="item">Contact us</li>
          </Link>
          <Link to="about" className="link">
            <li className="item">About us</li>
          </Link>
          <Link to="/" className="link">
            <li className="item">Home</li>
          </Link>
        

       
        </ul>
      </div>

      <div className="right">
      <Link to="/login" className="link">
            <span className="item">Account</span>
          </Link>
        <span className="cartIcon"> 
          <HiShoppingCart />
        </span>
      
    
      </div>
    </div>
  );
};

export default NavBar;

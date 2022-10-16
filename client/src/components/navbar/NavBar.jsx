import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import {IoLogoAndroid} from "react-icons/io";
import { AppContext } from "../../context/context";
import axios from "axios";
import "./navbar.scss";

const NavBar = () => {
  const { user, dispatch } = useContext(AppContext);



  const Navigate = useNavigate();


  const handleLogout = async() => {
      // const logout = await axios.delete("/user/logout")
      // localStorage.clear(logout)
      localStorage.clear()
      window.location.replace("/register")
      // setUser(!user)
  }


  // const handleLogout = () => {
  //   dispatch({ type: "LOGOUT" });
  //   // window.location.replace("/login")
  //   Navigate("/login");
  // };

  // const handleLogout = () => {
  //   dispatch({ type: "LOGOUT" });
  //   // window.location.replace("/login")
  //   Navigate("/login");
  // };




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
        {user ? 
        
        (
            <button onClick={handleLogout}>sign out</button>
          


         ) :(
          <Link to="/login" className="link">
          <span className="item">Account</span>
        </Link>

      )
      
      
     } 
      

        <span className="cartIcon"> 
          <HiShoppingCart />
        </span>
      
    
      </div>
    </div>
  );
};

export default NavBar;


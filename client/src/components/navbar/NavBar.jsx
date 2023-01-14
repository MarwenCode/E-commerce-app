import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiShoppingCart } from "react-icons/hi";
import { IoLogoAndroid } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { AppContext } from "../../context/context";
import axios from "axios";
import "./navbar.scss";

const NavBar = () => {
  const { user, dispatch, cart, quantity } = useContext(AppContext);

  const [serchActive, setSearchActive] = useState(false);

  const handleLogout = async () => {
    // const logout = await axios.delete("/user/logout")
    // localStorage.clear(logout)
    localStorage.clear();
    window.location.replace("/register");
    // setUser(!user)
  };

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
        <img className="logo" src="images/logo.jpg" />
      </div>

      <div className="center">
        <ul className="list">
          {!serchActive && (
            <>
              <Link to="about" className="link">
                <li className="item">About us</li>
              </Link>
              <Link to="/" className="link">
                <li className="item">Home</li>
              </Link>
            </>
          )}

          <Link to="orders" className="link">
            <li className="item">Orders</li>
          </Link>

          <li className="search">
            {serchActive && (
              <>
                <input />
               <span className="cancel" onClick={() => setSearchActive((prev) => !prev)}>X</span>
              
              </>

           
            )
           
            
            }

            <BsSearch className="icon" onClick={() => setSearchActive((prev) => !prev)} />
           
          </li>
        </ul>
      </div>

      <div className="right">
        {user ? (
          <button className="signoutBtn" onClick={handleLogout}>
            Sign out
          </button>
        ) : (
          <Link to="/login" className="link">
            <span className="item">Account</span>
          </Link>
        )}

        <span className="cartIcon">
          <Link to="/cartDetails">
            <HiShoppingCart className="link" />
          </Link>
          {/* {cart.length} */}
          {quantity}
        </span>
      </div>
    </div>
  );
};

export default NavBar;

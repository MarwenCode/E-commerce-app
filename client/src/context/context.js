import React, { useState, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

export const AppContext = React.createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null,
  cart:[],
  total:0,
  quantity:0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [items, setItems] = useState([])

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  //display data
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/product");
      console.log(res);
      setItems(res.data);
    };

    fetchData();
  }, []);

  //Add to cart
  const addToCart = (id) => {
    dispatch({type:"addToCart", payload:id})
  }





  return (
    <AppContext.Provider
      value={{
        user: state.user,
        items,addToCart,
        cart:state.cart,

        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  );
};











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
  const [items, setItems] = useState([]);
  // const [cart, setCart] = useState([])

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
  // const addToCart = async(id) => {

  //   dispatch({type:"addToCart", payload:id})
  // }

  const increase = (id) => {
    dispatch({ type: "increase", payload:id });
  };

  const decrease = (id) => {
    dispatch({ type: "decrease", payload:id });
  };






  return (
    <AppContext.Provider
      value={{
        ...state,
        user:state.user,
        items,
        cart:state.cart,
        increase,decrease,
        
      

        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  );
};











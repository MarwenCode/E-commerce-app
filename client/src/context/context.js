import React, { useState, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

export const AppContext = React.createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null,
  cart:JSON.parse(localStorage.getItem("cart")) || [],
  total:0,
  quantity:0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [items, setItems] = useState([]);
  // const [cart, setCart] = useState([])

  //modal payment 
  const [modalOpen, setModalOpen] = useState(false);


  //localStorahe user
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);


  //localStorage cart items
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart))
  }, [state.cart])





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
  const remove = (id) => {
    dispatch({type: "remove", payload:id})
  }

  useEffect(
    (id) => {
      dispatch({ type: "get-total" });
    },
    [state.cart]
  );



  
  






  return (
    <AppContext.Provider
      value={{
        ...state,
        user:state.user,
        items,
        cart:state.cart,
        increase,decrease,remove,
        modalOpen, setModalOpen,
       
        
      

        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  );
};











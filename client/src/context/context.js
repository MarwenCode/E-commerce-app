import React, { useState, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

export const AppContext = React.createContext();

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  // user: null,
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





  return (
    <AppContext.Provider
      value={{
        user: state.user,
        items,

        dispatch,
      }}>
      {children}
    </AppContext.Provider>
  );
};

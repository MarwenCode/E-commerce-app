import React, {useState, useReducer, useEffect} from "react";
import reducer from "./reducer";
import axios from "axios";


export const AppContext = React.createContext()

const initialState = {
    user:JSON.parse(localStorage.getItem("user")) || null,
    // user: null,

}

export const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)



    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user))
    },[state.user])






    return(
        <AppContext.Provider value={{
            user: state.user,
          
            dispatch

        }}        
        >{children}

        </AppContext.Provider>
    )







}
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CartDetails from "./components/cartdetails/CartDetails";
import Orders from "./pages/orders/Orders";
import { AppContext } from "./context/context";
import {ToastContainer, toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";
import "./app.scss"


function App() {
  const { cart, quantity, total,modalOpen, setModalOpen, increase,decrease,remove } = useContext(AppContext);
  return (
    <Router>
    {/* <div className="container" > */}
    {/* <div className={ modalOpen ? "modalActive" :  "container" } > */}
    <div className= "container"  >
      <NavBar />
      <Routes>
          
            {/* <Route path="/" element={user ? <Home /> : <Register />} /> */}
            <Route path="/" element={<Home /> } />
            <Route path="/contact" element={<Contact /> } />
            <Route path="/about" element={<About /> } />
            <Route path="/cartDetails" element={<CartDetails /> } />
            <Route path="/footer" element={<Footer /> } />
            <Route path="/login" element={<Login /> } />
            <Route path="/register" element={<Register /> } />
            <Route path="/orders" element={<Orders /> } />
          
        
   
      </Routes>
    </div>
    <ToastContainer />
  </Router>
  );
}

export default App;

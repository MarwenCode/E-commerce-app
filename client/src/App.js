import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import CartDetails from "./components/cartdetails/CartDetails";


function App() {
  return (
    <Router>
    <div className="container">
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
          
        
   
      </Routes>
    </div>
    {/* <ToastContainer /> */}
  </Router>
  );
}

export default App;

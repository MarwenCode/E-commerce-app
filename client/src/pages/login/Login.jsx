import React, {useState} from "react";
import "./login.scss";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();


    const handleLogin = async(e) => {
        e.preventDefault()

    
        try {
            const res = await axios.post("/user/login", {
                email,
                password
            })
            localStorage.setItem("user", JSON.stringify(res))
            console.log(res)
        
            res.data && window.location.replace("/");
            
        } catch (error) {
            console.log(error)
    
            
        }
    
       }






  return (
    <div className="login">
      <section className="heading">
        <div className="top">
          <h1 className="title">Login in to your store !</h1>
        </div>
      </section>

      <section className="form" onSubmit={handleLogin}>
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn">Login In</button>
          </div>
        </form>
      </section>

      <section className="down">
        <Link to="/register" className="link">
          <span>If your have an account please clic here !</span>
        </Link>
      </section>
    </div>
  );
};

export default Login;

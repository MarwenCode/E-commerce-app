import React, {useState} from "react";
import "./register.scss";
import axios from "axios";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();



    
  const handleRegister = async(e) => {
   
    e.preventDefault()
    try {
      const res = await axios.post("/user/register", {
        username,
        email,
        password,
        confirmPassword
      });
      localStorage.setItem("user", JSON.stringify(res))
      console.log(res)
   
      res.data && window.location.replace("/login");

    }catch(error) {
      console.log(error)
     
    }

  }

  return (
    <div className="register">
      <section className="heading">
        <div className="top">
          <h1 className="title">Register to find your mobile</h1>
          <img className="img" src="/images/signin.png" />
        </div>
      </section>

      <section className="form" onSubmit={handleRegister}>
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={username}
              placeholder="Enter your name"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
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
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              placeholder="Confirm  password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="btn">Sign Up</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Register;

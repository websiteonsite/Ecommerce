import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../components";

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        console.log(userName, password)

        const data = { email: userName, password: password }
          axios.post('http://localhost:3001/login', data)
            .then((res) => {
                console.log(res.data.token, 17);
                if (res.data.token) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    localStorage.setItem('userId', res.data.user._id)
                    localStorage.setItem('rights', JSON.stringify(res.data.user.roles))
                
                    navigate('/product')
                    
                }
            })
            .catch((err) => {
                console.log(err, 20)
            })
    }

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Login</h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="my-3">
                <label for="display-4">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  onChange={(e) => {
                    setUserName(e.target.value)
                }}
                />
              </div>
              <div class="my-3">
                <label for="floatingPassword display-4">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  onChange={(e) => {
                    setPassword(e.target.value)
                }}
                />
              </div>
              <div className="my-3">
                <p>New Here? <Link to="/register" className="text-decoration-underline text-info">Register</Link> </p>
              </div>
              <div className="text-center">
                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleLogin} >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

import React from 'react'
import { Footer, Navbar } from "../components";
import { Link } from 'react-router-dom';

import { useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {

   
        const navigate = useNavigate()    
        const [userName, setUserName] = useState('')
        const [password, setPassword] = useState('')
    
        const handleSignup = () => {
            console.log(userName, password)
    
            const data = { name: userName, password: password }
            axios.post('http://localhost:3000/register', data)
                .then((res) => {
                    console.log(res.data, 17)
                    if (res.data.code == 200) {
                        navigate('/login')
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
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="Name"
                                    placeholder="Enter Your Name"
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    placeholder="name@example.com"
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/login" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSignup}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register
import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:5000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3001/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    
    <div className="container">

          <h1 className="text-center fs-4 mt-5">Open a free demat and trading account online</h1>
          <h2 className='text-center mt-3 fs-5 text-muted'>Start investing brokerage free and join a community of 1.6+ crore investors and traders</h2>
          <div className='row'>
            <div className='col-6 p-5 mt-5'>
                <img src="media/images/dashboard.jpeg" style={{ width: "100%" }} alt="dashboard" />
            </div>

            <div className='col-6'>
                <div className='row mt-5 ' >
                    <h1 className=' mt-5 fs-4 '>Signup now</h1>
                <h2 className='mt-1 fs-5 text-muted mb-3'>Or track your existing application</h2>


                </div>
                    <form onSubmit={handleSubmit}>
        <div >
          <label className='me-5' htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
            style={{width:"70%"}}
          />
        </div>
        <div>
          <label className='me-3' htmlFor="email">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
            style={{width:"70%"}}
          />
        </div>
        <div>
          <label className='me-3' htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
            style={{width:"70%"}}
          />
        </div>
        <div className='row mt-3 text-center '>
            <button className='text-center mt-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Sign Up</button>
        
        </div>
        <div className='row fs-6 text-center text-muteds'>
          <p>Already have an account?<Link to={"/login"}>Login</Link></p> 
        </div>
      </form>
                
            </div>
          </div>
  
      <ToastContainer />
    </div>
  );
};

export default Signup;
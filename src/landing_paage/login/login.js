import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

    const Login = () => {

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;

  const handleOnChange = (e) => {

    const { name, value } = e.target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const { data } = await axios.post(
        "http://localhost:5000/login",
        {
          ...inputValue,
        },
        {
          withCredentials: true,
        }
      );

      const { success, message } = data;

      if (success) {

        window.location.href = "http://localhost:3001/";

      } else {

        alert(message);

      }

    } catch (error) {

      console.log(error);

    }
  };


  return (
    
    <div className="container">

          <h1 className="text-center fs-4 mt-5">Welcome back</h1>
          <div className='row'>
            <div className='col-6 p-5 mt-5'>
                <img src="media/images/dashboard.jpeg" style={{ width: "100%" }} alt="dashboard" />
            </div>

            <div className='col-6'>
                <div className='row mt-5 ' >
                    <h1 className=' mt-5 fs-4 '>Login now</h1>
                <h2 className='mt-1 fs-5 text-muted mb-3'>And track your existing application</h2>


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
            <button className='text-center mt-2 btn btn-primary fs-5' style={{width:"20%", margin: "0 auto"}}>Login</button>
        
        </div>
        <div className='row fs-6 text-center text-muteds'>
          <p>new user?<Link to={"/signup"}>Sign Up</Link></p> 
        </div>
      </form>
                
            </div>
          </div>
  
      <ToastContainer />
    </div>
  );
};      


export default Login;
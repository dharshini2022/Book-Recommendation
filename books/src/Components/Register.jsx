import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState("");
  const [phone, setphone] = useState("");
  const [username, setUserName] = useState("");
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href="http://localhost:5173/"


    axios.post("http://localhost:4000/users", {
      name: name,
      phone: phone,
      username: username,
      email: email,
      password: password,
    });
    console.log(name, phone, username, email, password);
  };

  return (
    <>
      <div className="header">
            <img src="/logo.jpg" alt="Logo" class="logo" />
            <p className='p1'>Register</p>
            <Link to="/Login" className="link">Login</Link> 
        </div>

    <div className="register_body">
        <div className="reg-form">

          <form onSubmit={handleSubmit}>
            <p>First Name</p>

            <input
              className="Name"
              type="text"
              placeholder="First name ..."
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <p>UserName</p>

            <input
              className="Name"
              type="text"
              placeholder="User Name ..."
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />

            <p>Mobile Number</p>

            <input
              className="mobile"
              type="Number"
              placeholder="Phone_Number"
              onChange={(e) => {
                setphone(e.target.value);
              }}
            />
            <p>Email</p>

            <input
              className="email"
              type="text"
              placeholder="Email"
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
            <p>Password</p>

            <input
              className="password"
              type="text"
              placeholder="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit" className="reg_btn">SignUp</button>
          </form>
        </div>
    </div>
    </>
    
  );
};

export default Register;
import React, { useState, useEffect } from "react";
import axios from 'axios'
const Login = () => {
  const [action, setAction] = useState("Login");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const user = await userLogin(username, password);
      console.log('Login successful:', user);
      
    } catch (error) {
      console.error('Login failed:', error.message);
      
    }
  }

  async function userLogin(Username, Pass) {
    try {
      const response = await axios.post('http://localhost:4000/users', {
        username: Username,
        password: Pass,
      });
  
      
      return response.data;
    } catch (error) {
      throw error; 
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <p>UserName</p>

          <input
            className="Name"
            type="text"
            placeholder="User Name ..."
            onChange={(e) => {
              setUserName(e.target.value);
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
          <button type="submit">Login</button>
        </div>

      </form>
    </>
  );
};

export default Login;
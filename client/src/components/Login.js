import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";



const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', user)
      .then(res => {
        window.localStorage.setItem('token', res.data.payload)
        history.push("/BubblePage")
      })
      .catch(err => console.log(err))
  }


  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <div>

      <h1>Welcome to the Bubble App!</h1>
      <h3>Please fill out the form below</h3>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={changeHandler}
          placeholder="First & Last Name"
        />

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={changeHandler}
          placeholder="Password"
        />
        <button className="log-in-btn">Log In</button>
      </form>
    </div >
  );
};

export default Login;

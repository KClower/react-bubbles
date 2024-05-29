import React, { useState } from "react";

const Login = () => {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });

  const changeHandler = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  };

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={changeHandler}
          placeholder="First & Last Name"
        />
        <input
          type="email"
          name="email"
          value={user.email}
          onChange={changeHandler}
          placeholder="Email"
        />
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={changeHandler}
          placeholder="Password"
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;

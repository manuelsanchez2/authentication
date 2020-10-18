import React, { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");

  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  const [loginStatus, setLoginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3001/register", {
      username: usernameRegister,
      password: passwordRegister,
    }).then((response) => {
      console.log(response);
    });
  };

  const login = () => {
    Axios.post("http://localhost:3001/login", {
      username: usernameLogin,
      password: passwordLogin,
    }).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="App">
      <h1>How to: register and login</h1>
      <main>
        <div className="registration">
          <h2>Register</h2>
          <label>Username</label>
          <input
            type="text"
            onChange={(e) => {
              setUsernameRegister(e.target.value);
            }}
          />
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => {
              setPasswordRegister(e.target.value);
            }}
          />
          <button onClick={register}>Register</button>
        </div>
        <div className="login">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="username..."
            onChange={(e) => {
              setUsernameLogin(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password..."
            onChange={(e) => {
              setPasswordLogin(e.target.value);
            }}
          />
          <button onClick={login}>Login</button>
        </div>
      </main>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>How to: register and login</h1>
      <main>
        <div className="registration">
          <h2>Register</h2>
          <label>Username</label>
          <input type="text" />
          <label>Password</label>
          <input type="password" />
          <button>Register</button>
        </div>
        <div className="login">
          <h2>Login</h2>
          <input type="text" placeholder="username..." />
          <input type="password" placeholder="password..." />
          <button>Login</button>
        </div>
      </main>
    </div>
  );
}

export default App;

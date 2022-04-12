import React, { useState } from "react";
import "./styleForSignUp.css";
const SignUpPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");
  const addPerson = () => {};
  return (
    <>
      <div className="signUpPage">
        <div className="form">
          <h1>Create a new account</h1>
          <div className="name">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter you username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter you email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="passwordOne">password</label>
            <input
              type="password"
              id="passwordOne"
              placeholder="Enter password"
              value={passwordOne}
              onChange={(e) => setPasswordOne(e.target.value)}
            />
          </div>
          <div className="password">
            <label htmlFor="passwordTwo">Confirm password</label>
            <input
              type="password"
              id="passwordTwo"
              placeholder="Retype your password"
              value={passwordTwo}
              onChange={(e) => setPasswordTwo(e.target.value)}
            />
          </div>
          <button onClick={addPerson}>Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;

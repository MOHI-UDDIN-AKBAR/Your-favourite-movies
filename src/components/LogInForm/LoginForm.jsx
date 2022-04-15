import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import "./styleForLogInForm.css";
import { useResultContext } from "../../context/Context";
import Banner from "../movies/Banner/Banner";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginFunction, setNewPassword } = useResultContext();
  const handleLogin = () => {
    console.log(email, password);
    if (email && password) {
      loginFunction(email, password);
      setEmail("");
      setPassword("");
    }
  };
  const handleForgetPassword = () => {
    setNewPassword(email);
  };
  return (
    <></>
    // <div className="logInForm">
    //   <div className="logInWithGoogle">
    //     <span className="googleIcon">
    //       <FcGoogle />
    //     </span>
    //     <span>Log in with Google</span>
    //   </div>
    //   <span className="or">or</span>
    //   <div className="form">
    //     <div className="email">
    //       <label htmlFor="email">Email</label>
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         placeholder="Enter your email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div className="password">
    //       <label htmlFor="password">Password</label>
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //     <span className="forgetPassword" onClick={handleForgetPassword}>
    //       Forget Password?
    //     </span>
    //     <button type="button" onClick={handleLogin}>
    //       Log in
    //     </button>
    //   </div>
    //   <span className="forSignUp">
    //     Don't have an account ?
    //     <span className="LinkToSignUpForm">
    //       {/* <Link to={} */}
    //       <Link
    //         to={"/signUp"}
    //         style={{ textDecoration: "none", color: "inherit" }}
    //       >
    //         Sign up
    //       </Link>
    //     </span>
    //   </span>
    // </div>
  );
};

export default LoginForm;

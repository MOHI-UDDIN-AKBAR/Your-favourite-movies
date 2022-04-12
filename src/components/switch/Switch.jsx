import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../LogInForm/LoginForm";
import SignUpPage from "../signUp/SignUpPage";
import AllMovies from "../movies/moviePage/MoviePage";
const Switch = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/signUp" element={<SignUpPage />} />
        <Route exact path="/movies" element={<AllMovies />} />
      </Routes>
    </>
  );
};

export default Switch;

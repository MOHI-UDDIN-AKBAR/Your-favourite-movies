import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "../LogInForm/LoginForm";
import SignUpPage from "../signUp/SignUpPage";
import AllMovies from "../movies/moviePage/MoviePage";
import { Error } from "../Error/Error";
import MovieDetails from "../movies/movieDetails/MovieDetails";
import AdditionalDetails from "../movies/AddionalDetails/AdditionalDetails";
const Switch = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/signUp" element={<SignUpPage />} />
        <Route exact path="/movies" element={<AllMovies />} />
        <Route exact path="/movieDetails/:id" element={<MovieDetails />} />
        <Route
          exact
          path="/additionalDetails/:name"
          element={<AdditionalDetails />}
        />

        <Route exact path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default Switch;

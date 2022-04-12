import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import FooterForMoviePage from "../footer/FooterForMoviePage";
import AllMovies from "../allMovies/AllMovies";
import "./styleForMoviePage.css";

const MoviePage = () => {
  return (
    <>
      <div className="moviePage">
        <div className="appBar">
          <h1>Entertainment</h1>
          <div className="identity">
            <span className="icon">
              <BsPersonCircle />
            </span>
            <span className="userName">Arafat</span>
          </div>
        </div>
        <AllMovies />
        <FooterForMoviePage />
      </div>
    </>
  );
};

export default MoviePage;

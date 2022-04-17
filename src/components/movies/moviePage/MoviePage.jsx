import React, { useEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import FooterForMoviePage from "../footer/FooterForMoviePage";
import AllMovies from "../allMovies/AllMovies";
import "./styleForMoviePage.css";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import { useResultContext } from "../../../context/Context";
const MoviePage = () => {
  const { search, setSearch, fetchApi } = useResultContext();
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="moviePage">
        <div className="appBar">
          <div className="logoAndSearchBar">
            <h1>Entertainment</h1>
            <div className="searchBar">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <div className="identity">
            <span className="icon">
              <BsPersonCircle />
            </span>
            <span className="userName">Arafat</span>
          </div>
        </div>
        <Banner />
        <HeroSection />
        <AllMovies />
        <FooterForMoviePage />
      </div>
    </>
  );
};

export default MoviePage;

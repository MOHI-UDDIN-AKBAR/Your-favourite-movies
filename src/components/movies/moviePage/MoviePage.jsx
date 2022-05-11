import React, { useEffect, useState } from "react";
import AppBar from "../AppBar/AppBar";
import FooterForMoviePage from "../footer/FooterForMoviePage";
import AllMovies from "../allMovies/AllMovies";
import "./styleForMoviePage.css";
import Banner from "../Banner/Banner";
import HeroSection from "../HeroSection/HeroSection";
import { useResultContext } from "../../../context/Context";
import LoginForm from "../../LogInForm/LoginForm";
import { useNavigate } from "react-router-dom";
const MoviePage = () => {
  const {
    search,
    setSearch,
    fetchApi,
    getBanner,
    getCurrentUser,
    currentUserEmail,
    getPermission,
  } = useResultContext();
  useEffect(() => {
    fetchApi();
    getBanner();
    // getCurrentUser();
  }, []);
  const navigate = useNavigate();
  // useEffect(() => {}, []);
  if (getPermission == false) {
    return navigate(-1);
  }

  return (
    <>
      <div className="moviePage">
        <AppBar />
        {search ? (
          <>
            <AllMovies />
          </>
        ) : (
          <>
            <Banner />
            <HeroSection />
          </>
        )}
        <AllMovies />
        <FooterForMoviePage />
      </div>
    </>
  );
};

export default MoviePage;

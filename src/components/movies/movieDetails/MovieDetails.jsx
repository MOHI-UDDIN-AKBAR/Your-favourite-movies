import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useResultContext } from "../../../context/Context";
import "./styleForMovieDetails.css";
const MovieDetails = () => {
  const { allMovies } = useResultContext();
  const path = useParams();
  const newMovie = allMovies.find((movie) => movie._id == path.id);
  console.log(path.id, newMovie);
  return (
    <>
      <div className="movieDetails">
        <div className="image">
          <img
            src={
              newMovie.image
                ? newMovie.image
                : "https://pixabay.com/photos/boy-fake-mustache-portrait-child-7097685/"
            }
            alt={newMovie.title ? newMovie.title : "Socios por Accidente"}
            loading="lazy"
          />
        </div>
        <div className="details">
          <h1 className="movieName">
            {newMovie.title ? newMovie.title : "Socios por Accidente"}
          </h1>
          <p className="description">
            {newMovie.description
              ? newMovie.description
              : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur aperiam, corrupti nam asperiores, fugit neque, maxime nihil exercitationem alias animi autem explicabo repellendus nobis reiciendis. Deleniti voluptatem beatae ipsa tempora"}
          </p>

          <div className="ratingAndDate">
            <span className="rating">
              Rating : {newMovie.rating ? newMovie.rating.slice(0, 1) : "6"}
            </span>
            <span className="release">
              Release : {newMovie.release ? newMovie.release : "24 May 2013"}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;

// <div className="eachMovies">
// <img src={newMovie.image} alt={newMovie.title} loading="lazy" />

// <h1 className="movieName">{newMovie.title}</h1>
// <div className="yearAndRating">
//   <span className="year">{newMovie.year}</span>
//   <span className="rating">{newMovie.rating.slice(0, 1)}</span>
// </div>
// </div>

import React, { useEffect } from "react";
import "./styleForMovies.css";
import { useResultContext } from "../../../context/Context";
const AllMovies = () => {
  const { allMovies, fetchApi, search } = useResultContext();
  useEffect(() => {
    fetchApi();
  }, [search]);
  return (
    <>
      <div className="movies">
        {allMovies?.map((eachMovie) => {
          const { image, title, rating, year, _id } = eachMovie;
          return (
            <div className="eachMovies" key={_id}>
              <img src={image} alt={title} loading="lazy" />
              <h1 className="movieName">{title}</h1>
              <div className="yearAndRating">
                <span className="year">{year}</span>
                <span className="rating">{rating.slice(0, 1)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllMovies;

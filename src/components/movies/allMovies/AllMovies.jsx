import React from "react";
import "./styleForMovies.css";
const AllMovies = () => {
  const tab = [1, 3, 4, 5, 6, 7, 7, 3, 2, 1, 3, 4, 5, 6, 7, 7, 3, 2];
  return (
    <>
      <div className="movies">
        {tab?.map((_, i) => {
          return (
            <div className="eachMovies" key={i}>
              <img
                src="http://source.unsplash.com/random"
                alt="movies"
                loading="lazy"
              />
              <h1 className="movieName">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut,
                sunt?
              </h1>
              <div className="yearAndRating">
                <span className="year">2021</span>
                <span className="rating">4.5</span>
              </div>
            </div>
          );
        })}
        {/* <div className="eachMovies">
          <img src="http://source.unsplash.com/random" alt="movies" />
          <h1 className="movieName">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, sunt?
          </h1>
          <div className="yearAndRating">
            <span className="year">2021</span>
            <span className="rating">4.5</span>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default AllMovies;

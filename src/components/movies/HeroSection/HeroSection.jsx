import React, { useEffect } from "react";
import { useResultContext } from "../../../context/Context";
import "./styleForHeroSection.css";
const HeroSection = () => {
  const { latestMovies } = useResultContext();

  return (
    <>
      <div className="heroSection">
        {/* <div className="mostRecent"> */}
        {latestMovies?.map((eachMovie, i) => {
          const { image, title } = eachMovie;

          return (
            <div className="eachMovies" key={i}>
              <img
                src={image ? image : "http://source.unsplash.com/random"}
                alt={title ? title : "movies"}
                loading="lazy"
              />
              {/* <div className="details">
                <h1 className="movieName">Lorem ipsum dolor sit amet.</h1>
                <div className="yearAndRating">
                  <span className="year">2022</span>
                  <span className="rating">3</span>
                </div>
              </div> */}
            </div>
          );
        })}
        {/* </div> */}
      </div>
    </>
  );
};

export default HeroSection;

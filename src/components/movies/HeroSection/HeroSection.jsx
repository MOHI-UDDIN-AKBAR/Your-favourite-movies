import React from "react";
import "./styleForHeroSection.css";
const HeroSection = () => {
  const tab = [1, 4, 3, 4, 3, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
  return (
    <>
      <div className="heroSection">
        {/* <div className="mostRecent"> */}
        {tab?.map((_, i) => {
          return (
            <div className="eachMovies" key={i}>
              <img
                src="http://source.unsplash.com/random"
                alt="movies"
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

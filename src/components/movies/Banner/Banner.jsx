import React, { useEffect, useState } from "react";
import { useResultContext } from "../../../context/Context";
import "./styleForBanner.css";
const Banner = () => {
  const { randomMovie } = useResultContext();

  return (
    <>
      {console.log(randomMovie)}
      {randomMovie.map((each) => {
        const { image, title, _id, description } = each;
        return (
          <div className="banner" key={_id}>
            <img
              src={image ? image : "http://source.unsplash.com/random"}
              alt={title ? title : "banner"}
            />
            <h1>{title ? title : "Lorem, ipsum dolor."}</h1>
            <p>
              {description
                ? description.substring(0, 120) + "..."
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus provident aspernatur animi odit modi explicabo"}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Banner;

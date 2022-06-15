import React, { useEffect } from "react";
import { useResultContext } from "../../../context/Context";
import { MdLocalMovies } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
const AppBar = () => {
  const { search, setSearch, currentUserEmail, getCurrentUser, isUser } =
    useResultContext();
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <>
      <div className="appBar">
        <div className="logoAndSearchBar">
          <h1>
            Entertainment
            <MdLocalMovies className="icon" />
          </h1>
          {/* <span className="movieIcon">
          </span> */}
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
          <span className="userName">
            {currentUserEmail.substring(0, 6)}...
          </span>
        </div>
      </div>
    </>
  );
};

export default AppBar;

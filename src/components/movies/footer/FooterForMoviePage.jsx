import React from "react";
import { RiYoutubeFill } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import "./styleForFooter.css";
import { Link } from "react-router-dom";
const FooterForMoviePage = () => {
  const footerObjects = [
    "Help",
    "Site map",
    "Term",
    "EU Privacy Policy",
    "Privacy",
    "Cookie Policy",
    "Manage setting",
    "Ads",
    "About us",
    "Privacy Policy For Journalists",
    "The Walt Entertainment Company",
  ];
  return (
    <>
      <div className="footer">
        <div className="logo">
          <h1>Entertainment</h1>
        </div>
        <div className="icons">
          <RiYoutubeFill className="icon" />
          <TiSocialTwitter className="icon" />
          <AiFillInstagram className="icon" />
          <BsFacebook className="icon" />
        </div>
        <div className="objects">
          {footerObjects?.map((each, i) => (
            <Link
              to={`/additionalDetails/${each}`}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <span key={i}>{each}</span>
            </Link>
          ))}
        </div>
        <h4>&copy; all rights reserved</h4>
      </div>
    </>
  );
};

export default FooterForMoviePage;

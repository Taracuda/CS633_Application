import React from "react";
import { Link } from "react-router-dom";
import CollectRImage from "../images/CollectR.jpg";
import "./HomePageComponent.css";

export const HomeComponent: React.FC = () => {
  return (
    <>
    <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
      <div>
        <Link to={"/login"} className="homepage-button">Login</Link>
        <Link to={"/browse"} className="homepage-button">Browse</Link>
      </div>
    </>
  );
};

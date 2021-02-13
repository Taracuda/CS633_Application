import React from "react";
import { Link } from "react-router-dom";
import CollectRImage from "../images/CollectR.jpg";
import "./HomePageComponent.css";

export const HomeComponent: React.FC = () => {
  return (
    <>
    <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
      <div>
        <button className="homepage-button">
          <Link to={"/login"}>Login</Link>
        </button>
        {/* //Browse button does not do anything upon click yet */}
        <button className="homepage-button">Browse</button>
      </div>
    </>
  );
};

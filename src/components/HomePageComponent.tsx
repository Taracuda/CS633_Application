import React from "react";
import { Link } from "react-router-dom";
import CollectRImage from "../images/CollectR.jpg";

export const HomeComponent: React.FC = () => {
  return (
    <>
      <img src={CollectRImage} className="CollectR-logo" alt="CollectR-logo" />
      <div>
        <button>
          <Link to={"/login"}>Login</Link>
        </button>
        {/* //Browse button does not do anything upon click yet */}
        <button>Browse</button>
      </div>
    </>
  );
};

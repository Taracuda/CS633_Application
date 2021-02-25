import { Auth } from "aws-amplify";
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

export const NavbarComponent: React.FC = () => {

    return (
        <>
    <div className="navbar-links">
        <Link to="/home" className="navbar-links">  Home  </Link><br/><br/>
        <Link to="/dashboard" className="navbar-links">  Dashboard  </Link><br/><br/>
        <Link to="/browse" className="navbar-links">  Browse  </Link><br/><br/>
        <Link to="/favorites" className="navbar-links">  Favorites  </Link><br/><br/>
        <a href="https://github.com/Taracuda/CS633_Application/issues" target="_blank" className="navbar-links">  Feedback  </a><br/><br/>
        <Link to="/home" onClick={() => {Auth.signOut()}} className="navbar-links">  Sign Out  </Link>
    </div>
        </>
    );}

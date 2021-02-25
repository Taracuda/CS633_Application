import { Auth } from "aws-amplify";
import React from "react";
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

export const NavbarComponent: React.FC = () => {

    return (
        <>
    <div className="navbar">
        <Link to="/home" className="navbar">  Home  </Link><br/><br/>
        <Link to="/dashboard" className="navbar">  Dashboard  </Link><br/><br/>
        <Link to="/browse" className="navbar">  Browse  </Link><br/><br/>
        <Link to="/favorites" className="navbar">  Favorites  </Link><br/><br/>
        <a href="https://github.com/Taracuda/CS633_Application/issues" target="_blank" className="navbar">  Feedback  </a><br/><br/>
        <Link to="/home" onClick={() => {Auth.signOut()}} className="navbar">  Sign Out  </Link>
    </div>
        </>
    );}

import { Auth } from "aws-amplify";
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./NavbarComponent.css";

export const NavbarComponent: React.FC = () => {

    return (
        <>
        <Navbar bg="light" variant="light">
    <Nav className="mr-auto navbar-words">
      <Nav.Link href="/home">  Home  </Nav.Link>
      <Nav.Link href="/dashboard">  Dashboard  </Nav.Link>
      <Nav.Link href="/browse">  Browse  </Nav.Link>
      <Nav.Link href="/favorites">  Favorites  </Nav.Link>
      <Nav.Link href="https://github.com/Taracuda/CS633_Application/issues">  Questions/Comments?  </Nav.Link>
      <button className="sign-out-button"onClick={() => {Auth.signOut()}}><Link to={"/home"}>Sign Out</Link></button>
    </Nav>
  </Navbar>
        </>
    );}
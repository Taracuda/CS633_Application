import { Auth } from "aws-amplify";
import React from "react";
import { Nav, Navbar } from 'react-bootstrap';
import "./NavbarComponent.css";

export const NavbarComponent: React.FC = () => {

    return (
        <>
        <Navbar bg="light" variant="light">
    <Nav className="mr-auto navbar-words">
        <Nav.Link href="/home">  Home  </Nav.Link><br/><br/>
        <Nav.Link href="/dashboard">  Dashboard  </Nav.Link><br/><br/>
        <Nav.Link href="/browse">  Browse  </Nav.Link><br/><br/>
        <Nav.Link href="/favorites">  Favorites  </Nav.Link><br/><br/>
        <Nav.Link href="https://github.com/Taracuda/CS633_Application/issues">  Feedback  </Nav.Link><br/><br/>
        <Nav.Link href="/home" onClick={() => {Auth.signOut()}}>  Sign Out  </Nav.Link>
    </Nav>
  </Navbar>
        </>
    );}

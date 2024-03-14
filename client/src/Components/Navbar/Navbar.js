// Navbar Component
import React from "react";
import "./Navbar.css";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <Navbar className="navbar">
      <Container className="logoContainer">
        <Link to={"/"} className="logo">
          Logo
        </Link>
      </Container>
      <Container className="linksContainer">
        <ul className="list">
          <li className="listItem">About</li>
          <li className="listItem">My Work</li>
          <li className="listItem">Testimonials</li>
        </ul>
        <Container className="buttonsContainer">
          <button type="button" className="blogBtn btn">
            Blog
          </button>
          <button type="button" className="consultationBtn btn">
            Free Consultation
          </button>
        </Container>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

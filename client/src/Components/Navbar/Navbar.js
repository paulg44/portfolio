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
          {`< PG />`}
        </Link>
      </Container>
      <Container className="linksContainer">
        <Container className="buttonsContainer">
          <button type="button" className="blogBtn btn">
            Blog
          </button>
          <button type="button" className="consultationBtn btn">
            Free Consultation
          </button>
        </Container>
        <ul className="list">
          <li className="listItem">
            <Link to={"/footer"}>Contact</Link>
          </li>
        </ul>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

// Navbar Component
import "./Navbar.css";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa6";
import { darkModeTheme, useDarkMode } from "../DarkModeContext/DarkModeContext";

function NavbarComponent() {
  const {darkMode, toggleDarkMode}

  return (
    <Navbar className="navbar">
      <Container className="logoContainer">
        <Link to={"/"} className="logo">
          {`< PG />`}
        </Link>
      </Container>
      <Container className="linksContainer">
        <Container className="buttonsContainer">
          <button type="button" className="btn">
            <FaLightbulb />
          </button>
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

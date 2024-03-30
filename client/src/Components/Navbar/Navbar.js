// Navbar Component
import "./Navbar.css";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLightbulb } from "react-icons/fa6";

function NavbarComponent({ toggleDarkMode }) {
  return (
    <Navbar className="navbar">
      <Container className="logoContainer">
        <Link to={"/"} className="logo">
          {`< PG />`}
        </Link>
      </Container>
      <Container className="linksContainer">
        <Container className="buttonsContainer">
          <button onClick={toggleDarkMode} type="button" className="btn">
            <FaLightbulb />
          </button>
          <Link className="blogBtn btn">Blog</Link>
          <Link to={"/consult"} className="consultationBtn btn">
            Free Consultation
          </Link>
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

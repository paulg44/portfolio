// Footer Component
import { Container } from "react-bootstrap";
import "./Footer.css";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <Container className="footer">
      <ul>
        <a href="https://github.com/paulg44" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/paul-garton-697a87241/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </ul>
      <p>paulgarton1984@hotmail.com</p>
    </Container>
  );
}

export default Footer;

// Component for About/Header

import "./About.css";
import { Container } from "react-bootstrap";

function AboutHeader() {
  return (
    <Container className="aboutHeader">
      <Container className="header">
        <p className="hiThere">Hi there,</p>
        <h1>Meet me, Paul!</h1>
        <Container className="about">
          <p>A creative web {}. I enjoy designing and building websites.</p>
        </Container>
      </Container>
      <button type="button">View my work</button>
    </Container>
  );
}

export default AboutHeader;

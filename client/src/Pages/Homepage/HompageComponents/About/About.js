// Component for About/Header

import "./About.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function AboutHeader() {
  const descriptiveText = [
    "software developer",
    "web developer",
    "web designer",
    "UI/UX enthusiast",
  ];

  const [textScroll, setTextScroll] = useState("");
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the currentIndex, wrapping back to the beginning if necessary
      setTextScroll((prevIndex) => (prevIndex + 1) % descriptiveText.length);
    }, 2800);

    return () => {
      clearInterval(intervalId);
    };
  }, [descriptiveText.length]);

  return (
    <Container className="aboutHeader">
      <Container className="header">
        <p className="hiThere">Hi there,</p>
        <h1>Meet me, Paul!</h1>
        <Container className="about">
          <p>A creative {descriptiveText[textScroll]}</p>
          <p>I like designing and building things for the web.</p>
        </Container>
      </Container>
      <button type="button" className="btn myWorkBtn">
        View my work
      </button>
    </Container>
  );
}

export default AboutHeader;

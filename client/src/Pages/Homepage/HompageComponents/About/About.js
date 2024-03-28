// Component for About/Header

import "./About.css";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";

function AboutHeader({ darkMode }) {
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
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [descriptiveText.length]);

  return (
    <Container className={`aboutHeader ${darkMode}`}>
      <Container className={`header ${darkMode}`}>
        <p className="hiThere">Hi there,</p>
        <h1>
          Meet me,<span className={`paul ${darkMode}`}>Paul!</span>
        </h1>
        <Container className="about">
          <p className="firstParagraph">
            A creative
            <div className={`textScroll ${darkMode}`}>
              <p className="textScrollText">{descriptiveText[textScroll]}</p>
            </div>
          </p>
          <p className="secondParagraph">
            I like designing and building things for the web.
          </p>
        </Container>
      </Container>
    </Container>
  );
}

export default AboutHeader;

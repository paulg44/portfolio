// Component for Homepage
import { Container } from "react-bootstrap";
import "./Homepage.css";

import MyWork from "./HompageComponents/MyWork/MyWork";

import Testimonials from "./HompageComponents/Testimonials/Testimonials";

function Homepage() {
  return (
    <Container>
      <MyWork />
      <Testimonials />
    </Container>
  );
}

export default Homepage;

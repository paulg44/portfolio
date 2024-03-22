// Component for Homepage
import { Container } from "react-bootstrap";
import "./Homepage.css";
import AboutHeader from "./HompageComponents/About/About";
import MyWork from "./HompageComponents/MyWork/MyWork";
import Testimonials from "./HompageComponents/Testimonials/Testimonials";

function Homepage() {
  return (
    <Container>
      <AboutHeader />
      <MyWork />
      <br />
      <br />
      <br />
      <Testimonials />
    </Container>
  );
}

export default Homepage;

// Component for Homepage
import { Container } from "react-bootstrap";
import "./Homepage.css";
import AboutHeader from "./HompageComponents/About/About";
import MyWork from "./HompageComponents/MyWork/MyWork";

function Homepage() {
  return (
    <Container>
      <AboutHeader />
      <MyWork />
    </Container>
  );
}

export default Homepage;

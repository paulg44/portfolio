// Component for Homepage
import { Container } from "react-bootstrap";
import "./Homepage.css";

import MyWork from "./HompageComponents/MyWork/MyWork";
import Footer from "../../Components/Footer/Footer";
import Testimonials from "./HompageComponents/Testimonials/Testimonials";

function Homepage({ darkMode }) {
  return (
    <Container>
      <MyWork darkMode={darkMode} />
      <Testimonials />
      <Footer />
    </Container>
  );
}

export default Homepage;

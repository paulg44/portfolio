// MyWork Component
import "./MyWork.css";
import { Container } from "react-bootstrap";
import Mobile from "./Mobile/Mobile";

function MyWork() {
  return (
    <Container className="myWork">
      <Container className="projects"></Container>
      <Mobile />
    </Container>
  );
}

export default MyWork;

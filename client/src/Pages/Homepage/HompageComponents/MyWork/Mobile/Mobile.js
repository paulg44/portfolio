// Mobile Component
import "./Mobile.css";
import { Container } from "react-bootstrap";

function Mobile() {
  return (
    <Container className="mobile">
      <div className="outerMobile">
        <div className="innerMobile"></div>
      </div>
    </Container>
  );
}

export default Mobile;

// Consultation Component Page

import { Container, Form } from "react-bootstrap";
import "./Consultation.css";

function Consultation() {
  return (
    <Container className="consultation">
      <Container className="consultHeader">
        <h2>Consultation</h2>
        <p>
          Thank you very much for taking the time to look at my website and for
          giving me the opportunity to provide an estimate on the work you need
          doing. Please fill out the form below and I will respond to requests
          as soon as possible.
        </p>
      </Container>
      <Form className="consultForm">
        {/* Name */}
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>
        {/* Email */}
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
        {/* Text Body */}
        <Form.Group controlId="formText">
          <Form.Label>Information</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Please enter any relevant information, such as - website topic, number of pages, any API's, time range, price range etc. The more information provided the more accurate the estimate will be. Thanks"
          />
        </Form.Group>
        <button type="submit" className="btn formBtn">
          Submit
        </button>
      </Form>
    </Container>
  );
}

export default Consultation;

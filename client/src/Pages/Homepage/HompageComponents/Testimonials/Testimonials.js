import { Container } from "react-bootstrap";
import "./Testimonials.css";
import { FaUser } from "react-icons/fa";

function Testimonials() {
  const testimonialData = [
    {
      id: 1,
      name: "Adam Henshall",
      company: "AMH Decorators",
      testimonial:
        "Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    },
    {
      id: 2,
      name: "Tom Mitchell",
      company: "Shardlow St James",
      testimonial:
        "Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    },
    {
      id: 3,
      name: "Ant Lacey",
      company: "Lacey & Ball",
      testimonial:
        "Im a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.",
    },
  ];

  return (
    <Container className="testimonials">
      {testimonialData.map((entry, id) => {
        return (
          <div key={id} className="testimonialPersons">
            <div className="person">
              <FaUser />
              <h3>{entry.name}</h3>
            </div>
            <p>{entry.company}</p>
            <p>{entry.testimonial}</p>
          </div>
        );
      })}
    </Container>
  );
}

export default Testimonials;

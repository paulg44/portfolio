// Mobile Component
import "./Mobile.css";
import { Container } from "react-bootstrap";

function Mobile({ handleProjectChoice, projectObj }) {
  return (
    <Container className="mobile">
      <div className="outerMobile">
        <div className="innerMobile">
          <div className="links">
            <p>Links</p>
            <ul>
              {projectObj.map((project, index) => (
                <li key={index}>
                  <button onClick={() => handleProjectChoice(project.icon)}>
                    {project.icon}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Mobile;

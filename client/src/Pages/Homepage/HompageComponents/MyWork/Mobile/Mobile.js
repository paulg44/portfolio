// Mobile Component
import "./Mobile.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Mobile({ handleProjectChoice, projectObj }) {
  return (
    <Container className="mobile">
      <div className="outerMobile">
        <div className="innerMobile">
          <div className="links">
            <p>Links</p>
            <ul>
              {projectObj.map((project, index) => (
                <li
                  key={index}
                  onClick={() => handleProjectChoice(project.projectName)}
                >
                  <Link>{projectObj.title}</Link>
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

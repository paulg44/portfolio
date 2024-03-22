// Mobile Component
import "./Mobile.css";
import { Container } from "react-bootstrap";

function Mobile({ handleProjectChoice, projectObj }) {
  return (
    <Container className="mobile">
      <div className="outerMobile">
        <div className="mobileBtns">
          <div className="volumeBtn"></div>
          {/* Make the power button work */}
          <div className="powerBtn"></div>
        </div>
        <div className="camera"></div>
        <div className="innerMobile">
          <div className="links">
            <h4>Projects</h4>
            <ul>
              {projectObj.map((project, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleProjectChoice(project.title)}
                    style={{
                      color: "white",
                      backgroundImage: `url(${project.backgroundIMG})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {project.icon}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="bottomBar"></div>
        </div>
      </div>
    </Container>
  );
}

export default Mobile;

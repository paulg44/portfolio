// Mobile Component
import "./Mobile.css";
import { Container } from "react-bootstrap";
import { FaCircleNodes } from "react-icons/fa6";

function Mobile({ handleProjectChoice, projectObj }) {
  const filterTesting = projectObj.filter(
    (project) => project.title !== "Testing"
  );

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
              {filterTesting.map((project, index) => (
                <li key={index}>
                  <button
                    className="linksBtn"
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
            <button
              onClick={() => handleProjectChoice("Testing")}
              type="button"
              className="testingSearch"
            >
              <FaCircleNodes />
              Testing?....
            </button>
          </div>
          <div className="bottomBar"></div>
        </div>
      </div>
    </Container>
  );
}

export default Mobile;

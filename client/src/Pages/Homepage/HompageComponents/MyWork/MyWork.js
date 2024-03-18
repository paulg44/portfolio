// MyWork Component
import "./MyWork.css";
import { Container } from "react-bootstrap";
import Mobile from "./Mobile/Mobile";
import ssjIMG from "../../../../IMG/ssj_homepage.jpg";
import amhIMG from "../../../../IMG/hifi_1.jpg";
import { FaBeer, FaBrush } from "react-icons/fa";
import { useEffect, useState } from "react";

function MyWork() {
  const [activeProject, setActiveProject] = useState(null);

  function handleProjectChoice(projectName) {
    const selectedProject = projectObj.find(
      (project) => project.projectName === projectName
    );
    setActiveProject(selectedProject);
  }

  useEffect(() => {
    console.log(activeProject, "is the active project");
  }, [activeProject]);

  const projectObj = [
    {
      id: 1,
      title: "Shardlow St James",
      img: ssjIMG,
      description: "ssj",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      icon: <FaBeer />,
    },
    {
      id: 2,
      title: "AMH Decorating",
      img: amhIMG,
      description: "AMH",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      icon: <FaBrush />,
    },
  ];

  return (
    <Container className="myWork">
      <Container className="projects">
        <h3>{projectObj.title}</h3>
      </Container>
      <Mobile
        handleProjectChoice={handleProjectChoice}
        projectObj={projectObj}
      />
    </Container>
  );
}

export default MyWork;

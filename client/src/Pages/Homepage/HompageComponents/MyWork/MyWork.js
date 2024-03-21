// MyWork Component
import "./MyWork.css";
import { Container } from "react-bootstrap";
import Mobile from "./Mobile/Mobile";
import ssjIMG from "../../../../IMG/ssj_homepage.jpg";
import runLogIMG from "../../../../IMG/running_log_table.jpg";
import amhIMG from "../../../../IMG/hifi_1.jpg";
import javaIMG from "../../../../IMG/saw-img.jpg";
import ssjLogo from "../../../../IMG/ssj_logo_test_2.jpg";
import amhLogo from "../../../../IMG/amh_logo.jpg";
import lgLogo from "../../../../IMG/logo.png";
import { FaGitSquare, FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";

function MyWork() {
  const projectObj = [
    {
      id: 1,
      title: "Shardlow St James",
      img: ssjIMG,
      imgAlt: "project image",
      description: "ssj",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      // icon: "SSJ",
      backgroundIMG: ssjLogo,
    },
    {
      id: 2,
      title: "AMH Decorating",
      img: amhIMG,
      imgAlt: "project image",
      description: "AMH",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      // icon: "AMH",
      backgroundIMG: amhLogo,
    },
    {
      id: 3,
      title: "Lacey & Ball",
      img: amhIMG,
      imgAlt: "project image",
      description: "L & B",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      icon: "L & B",
      backgroundIMG: ssjIMG,
    },
    {
      id: 4,
      title: "LG Guitars",
      img: amhIMG,
      imgAlt: "project image",
      description: "LG",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      // icon: "LG",
      backgroundIMG: lgLogo,
    },
    {
      id: 5,
      title: "Running Logs",
      img: runLogIMG,
      imgAlt: "project image",
      description: "Running logs",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      icon: "RL",
      backgroundIMG: ssjIMG,
    },
    {
      id: 6,
      title: "JavaScript Projects",
      img: javaIMG,
      imgAlt: "project image",
      description: "Javascript",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      icon: "JS",
      backgroundIMG: ssjIMG,
    },
  ];

  const [activeProject, setActiveProject] = useState("");

  function handleProjectChoice(title) {
    const selectedProject = projectObj.find(
      (project) => project.title === title
    );
    setActiveProject(selectedProject);
  }

  useEffect(() => {
    console.log(activeProject, "is the active project");
  }, [activeProject]);

  return (
    <Container className="myWork">
      <Container className="projects">
        <h3>{activeProject.title}</h3>
        <img
          style={{ width: "80%" }}
          src={activeProject.img}
          alt={activeProject.imgAlt}
        ></img>
        <p>{activeProject.description}</p>
        {/* Only show when active project is selected */}
        <a href={activeProject.githubLink} target="_blank" rel="noreferrer">
          <FaGitSquare />
        </a>
        <a href={activeProject.webLink} target="_blank" rel="noreferrer">
          <FaGoogle />
        </a>
      </Container>
      <Mobile
        handleProjectChoice={handleProjectChoice}
        projectObj={projectObj}
      />
    </Container>
  );
}

export default MyWork;

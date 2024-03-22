// MyWork Component
import "./MyWork.css";
import { Container } from "react-bootstrap";
import Mobile from "./Mobile/Mobile";
import ssjIMG from "../../../../IMG/ssj_homepage.jpg";
import ssjLogo from "../../../../IMG/ssj_logo_test_2.jpg";
import amhIMG from "../../../../IMG/amh_main.jpg";
import amhLogo from "../../../../IMG/amh_logo.jpg";
import runLogIMG from "../../../../IMG/running_log_table.jpg";
import javaIMG from "../../../../IMG/saw-img.jpg";
import javaLogo from "../../../../IMG/saw_win.jpg";
import lbLogo from "../../../../IMG/L&B_plain_background.jpg";
import lgIMG from "../../../../IMG/lg_guitars_main.jpg";
import lgLogo from "../../../../IMG/lg_logo_2.PNG";
import consensusIMG from "../../../../IMG/consensus_main.jpg";
import consensusLogo from "../../../../IMG/logo_test_2.jpg";
import { FaGitSquare, FaGoogle } from "react-icons/fa";
import { useEffect, useState } from "react";

function MyWork() {
  const projectObj = [
    {
      id: 1,
      title: "Shardlow St James",
      img: ssjIMG,
      imgAlt: "project image",
      description:
        "A project I have taken on for my local amateur football club. I have used React for the tech stack as it is scalable and the reusable components are perfect as the club has three teams. I have also integrated some real time data from the FA website and is fully tested using Cypress. Currently building a back end with node, express and PostgreSQL",
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
      title: "Consensus",
      img: consensusIMG,
      imgAlt: "project image",
      description: "Consensus",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      // icon: "L & B",
      backgroundIMG: consensusLogo,
    },
    {
      id: 4,
      title: "LG Guitars",
      img: lgIMG,
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
      backgroundIMG: lbLogo,
    },
    {
      id: 6,
      title: "JavaScript Projects",
      img: javaIMG,
      imgAlt: "project image",
      description: "Javascript",
      githubLink: "https://github.com/paulg44/shardlow_st_james",
      webLink: "https://statuesque-basbousa-0726c3.netlify.app/",
      // icon: "JS",
      backgroundIMG: javaLogo,
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
      <Container className="projectsDisplay">
        <h3>{activeProject.title}</h3>
        <Container className="outerIpad">
          <Container className="innerIpad">
            <img src={activeProject.img} alt={activeProject.imgAlt}></img>
            {/* Only show when active project is selected */}
          </Container>
        </Container>
        <p className="projectDesc">{activeProject.description}</p>
        <div className="ipadLinks">
          <a href={activeProject.githubLink} target="_blank" rel="noreferrer">
            <FaGitSquare />
          </a>
          <a href={activeProject.webLink} target="_blank" rel="noreferrer">
            <FaGoogle />
          </a>
        </div>
      </Container>
      <Mobile
        handleProjectChoice={handleProjectChoice}
        projectObj={projectObj}
      />
    </Container>
  );
}

export default MyWork;

import { useState } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/portfoliov1-img.png";
import projImg2 from "../assets/img/MACE-project-img.png";
import projImg3 from "../assets/img/SeedBank-project-img.png";

import colorSharp from "../assets/img/color-sharp.png";
import 'animate.css';


export const Projects = () => {

  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "Personal Portfolio Website (v1.0)",
      description: "Web portfolio built HTML/CSS, JavaScript and Bootstrap.",
      imgUrl: projImg1,
      category: ["all", "web"],
      githubLink: "LINK_TO_GITHUB_REPO_1"
    },
    {
      title: "MACE Simple Search Engine",
      description: "Python CLI app that uses NLTK for natural language processing.",
      imgUrl: projImg2,
      category: ["all", "desktop"],
      githubLink: "https://github.com/cedricdomingo/MACE-Simple-Search-Engine"
    },
    {
      title: "SeedBank Personal Gardening Help System",
      description: "Java desktop application built using JavaFX, SceneBuilder, and MySQL.",
      imgUrl: projImg3,
      category: ["all", "desktop"],
      githubLink: "https://github.com/cedricdomingo/SeedBank-Personal-Gardening-Help-System"
    },
    // Add more projects as needed with respective categories
  ];

  const filterProjects = (category) => {
    setActiveTab(category);
  };

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category.includes(activeTab));


  return (
    <section className="project" id="projects">
      <Container>
        <h2>Projects</h2><br></br>
        <p>From crafting responsive web applications using <b>React</b>, <b>JavaScript</b>, and <b>HTML/CSS</b> to developing <b>Python</b> CLI applications employing NLTK for natural language processing and <b>Java</b> Desktop applications using JavaFX, my journey showcases a versatile spectrum of skills. </p>
        <Row>
          <Col size={12}>
            <Tab.Container
              id="projects-tabs"
              activeKey={activeTab}
              onSelect={(key) => filterProjects(key)}
            >
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="all">All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="web">Web</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="desktop">Desktop</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="all">
                  <Row>
                    {filteredProjects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="web">
                  <Row>
                    {/* Render only web projects */}
                    {filteredProjects
                      .filter((project) => project.category.includes("web"))
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="desktop">
                  <Row>
                    {/* Render only desktop projects */}
                    {filteredProjects
                      .filter((project) => project.category.includes("desktop"))
                      .map((project, index) => (
                        <ProjectCard key={index} {...project} />
                      ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt="Background" />
      <div className="section-divider"></div>

    </section>
  );
};

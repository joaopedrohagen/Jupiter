import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/comingsoon.gif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "140px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="Coming Soon"
              description="Coming soon, a new project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coming Soon"
              description="Coming soon, a new project."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Coming Soon"
              description="Coming soon, a new project."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

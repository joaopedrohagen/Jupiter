import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Io.gif"
import editor2 from "../../Assets/Projects/Jupyter.gif"
import editor3 from "../../Assets/Projects/dnsenum.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="purple">Trabalhos </strong>Recentes
        </h1>
        <p style={{ color: "white" }}>
        Aqui estão alguns projetos em que trabalhei recentemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "140px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              title="CEPhinder"
              description="Um buscador de CEP simples, rápido e com interface amigável."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor2}
              isBlog={false}
              title="Jupiter Portifolio"
              description="Meu portfólio pessoal em hagen.dev.br apresentando alguns de meus projetos no GitHub, bem como meu resumo e habilidades técnicas. Desenvolvido com React.js e Node.js."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor3}
              isBlog={false}
              title="Ganymede - DNSEnum ..."
              description="Ganimedes é um script Python simples para enumerar subdomínios de um determinado domínio usando um arquivo de lista de palavras. O script usa threads para executar solicitações de forma assíncrona, o que pode acelerar o processo de enumeração."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

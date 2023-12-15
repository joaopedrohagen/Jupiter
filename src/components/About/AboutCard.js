import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Oi Pessoal! Eu sou o <span className="purple">João Pedro Hagen </span>
            de <span className="purple"> Juiz de Fora, Minas Gerais - Brasil.</span>
            <br /> Estou cursando <span className="purple"></span>Análise e Desenvolvimento de Sistemas e estou entrando no segundo ano de estudos.
            <br />
            Além disso, trabalhei como Analista de Infraestrutura Sênior na Configr.
            <br />
            <br />
            Alem de programar e estudar, outras coisas que eu amo fazer são:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar videogames;
            </li>
            <li className="about-activity">
              <ImPointRight /> Assistir séries e filmes de ficção científica;
            </li>
            <li className="about-activity">
              <ImPointRight /> Tocar guitarra, violão e cantar.
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

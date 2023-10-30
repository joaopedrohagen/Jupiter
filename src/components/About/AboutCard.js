import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey guys! I am <span className="purple">João Pedro Hagen </span>
            from <span className="purple"> Juiz de Fora, Minas Gerais - Brazil.</span>
            <br /> I'm studying Software Engineering, and I'm entering my second year of studies.
            <br />
            Additionally, I currently work as a Senior Infrastructure Analyst at Configr.
            <br />
            <br />
            Apart from programming, some other things I love to do are:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing video games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching science fiction series and movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing the guitar and singing
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

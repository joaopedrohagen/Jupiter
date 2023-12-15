import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              DEIXE-ME <span className="purple"> APRESENTAR-ME </span>
            </h1>
            <p className="home-about-body">
              Eu tenho paixão pela área de cybersecurity e estudo incansavelmente
              para me tornar um dos melhores. 👩‍🎓
              <br />
              <br />Eu estudo programação todos os dias com foco em linguagens como
              <i>
                <b className="purple"> Python, Ruby,Go Lang, e NodeJS. </b>
              </i>
              <br />
              <br />
              Também tenho conhecimento substancial em bancos de dados relacionais, especialmente em
              <i>
                <b className="purple"> Postgresql</b>, e tamém em orquestração de containers com {" "}
                <b className="purple"> Kubernetes</b> e
                <b className="purple"> Docker.</b>
              </i>
              <br />
              <br />
              Possuo ampla experiência em administração de servidores, tanto em ambientes
              <b className="purple">
                <i>Windows &nbsp;</i>
              </b>como em&nbsp;
              <b className="purple">
                <i>Linux</i>
              </b>.
              <i>
                &nbsp;Recentemente, trabalhava como
                <b className="purple"> &nbsp;Senior Infrastructure Analyst {" "}</b>
                e pretendo migrar para a área de
              </i>
              <i>
                <b className="purple"> programação </b>.
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>ME ENCONTRE EM</h1>
            <p>
              Sinta-se à vontade para se <span className="purple">conectar </span>comigo!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/joaopedrohagen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/joaopedrohagen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/joaopedrohagen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

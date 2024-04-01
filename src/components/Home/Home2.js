import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/ejsk.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
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
              GET TO <span className="purple"> KNOW  </span> ME
            </h1>
            <p className="home-about-body">
            Hooked on automation (you name a tool, I've probably played with it!)… 🤷‍♂️
              <br />
              <br />I bridge the gap between devs and ops, ensuring smooth deployments with monitoring 
              <i>
                <b className="purple"> (think fancy dashboards) and IaC (infrastructure as code, because who needs manual setup?). </b>
              </i>
              <br />
              <br />
              Security champion by day, automation architect by night! &nbsp;
              <i>
                <b className="purple"> I bridge the gap between development and operations with secure and efficient deployments (DevSecOps practices, Jenkins, GitHub Actions). </b> My passion lies in building {" "}
                <b className="purple">
                robust and scalable DevOps solutions that empower innovation.
                </b>
              </i>
              <br />
              <br />
              Driven by a passion for efficiency, I leverage automation (Jenkins, GitHub Actions), code analysis ( sonarqube) testing (cypress) containerization (Docker, Kubernetes),  <b className="purple">scripting (python)</b> and
              <i>
                <b className="purple">
                  {" "}
                  monitoring (Grafana, Prometheus) 
                </b>
              </i>
              &nbsp; to
              <i>
                <b className="purple"> build robust DevOps pipelines.</b>
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
            <h1>CONNECT WITH ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Eunice2000"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/eunice_adediran"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/adediran-eunice-b409b61b1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/adediran.eunice/"
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

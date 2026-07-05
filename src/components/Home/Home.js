import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiOutlineCloudServer, AiOutlineDownload } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import profilePhoto from "../../Assets/profile.jpeg";
import pdf from "../../Assets/Eunice-A-Adediran.pdf";
import Particle from "../Particle";
import Home2 from "./Home2";
import YouTube from "./YouTube";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="align-items-center hero-row">
            <Col lg={7} className="home-header">
              <p className="eyebrow">DevOps • Cloud • Automation • Security</p>
              <h1 className="hero-title">
                I build secure, automated cloud systems that help teams ship
                reliably.
              </h1>
              <p className="hero-copy">
                I am <strong>Eunice Adediran</strong>, a Lagos-based DevOps
                Engineer focused on CI/CD, infrastructure as code, observability,
                and cloud platforms. I turn manual release work into repeatable,
                monitored delivery systems.
              </p>

              <div className="type-wrap">
                <Type />
              </div>

              <div className="hero-actions">
                <a
                  className="primary-action"
                  href="https://www.linkedin.com/in/eunice-adediran-b409b61b1/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn /> Connect on LinkedIn
                </a>
                <a className="secondary-action" href={pdf} target="_blank" rel="noreferrer">
                  <AiOutlineDownload /> Download CV
                </a>
              </div>

              <div className="hero-proof">
                <div>
                  <span>IaC</span>
                  Terraform, CloudFormation, Ansible
                </div>
                <div>
                  <span>CI/CD</span>
                  Jenkins, GitHub Actions, quality gates
                </div>
                <div>
                  <span>Cloud</span>
                  AWS, GCP, DigitalOcean
                </div>
              </div>
            </Col>

            <Col lg={5} className="hero-visual">
              <div className="portrait-shell">
                <img src={profilePhoto} alt="Eunice Adediran" />
                <div className="availability-card">
                  <AiOutlineCloudServer />
                  <span>Available for DevOps, cloud, and automation work</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <YouTube />
    </section>
  );
}

export default Home;

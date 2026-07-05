import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineDeploymentUnit,
  AiOutlineSafety,
} from "react-icons/ai";
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiFiverr, SiUpwork, SiTerraform, SiPrometheus } from "react-icons/si";
import selarLogo from "../../Assets/selar-logo-small.png";

const strengths = [
  {
    icon: <AiOutlineDeploymentUnit />,
    title: "Release Automation",
    text: "I design CI/CD pipelines that make build, test, scan, and deploy flows repeatable across environments.",
  },
  {
    icon: <SiTerraform />,
    title: "Infrastructure as Code",
    text: "I provision cloud infrastructure with Terraform, CloudFormation, and Ansible so teams can scale with consistency.",
  },
  {
    icon: <AiOutlineSafety />,
    title: "DevSecOps Mindset",
    text: "I bring security earlier into delivery through secret management, code quality checks, and safer deployment practices.",
  },
  {
    icon: <SiPrometheus />,
    title: "Observability",
    text: "I set up monitoring with tools like Prometheus, Grafana, and Loki so systems are easier to understand and improve.",
  },
];

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="section-intro">
          <Col lg={9}>
            <p className="eyebrow">What I Bring</p>
            <h2>
              Practical DevOps engineering for teams that care about uptime,
              speed, and security.
            </h2>
            <p>
              My work sits where development, operations, and cloud architecture
              meet. I enjoy building the delivery systems behind great products:
              pipelines, infrastructure, monitoring, and documentation that make
              engineering teams move with more confidence.
            </p>
          </Col>
        </Row>

        <Row className="strength-grid">
          {strengths.map((item) => (
            <Col md={6} lg={3} key={item.title}>
              <article className="strength-card">
                <div className="strength-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            </Col>
          ))}
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h2>Let’s build something reliable.</h2>
            <p>
              Connect with me for DevOps projects, cloud infrastructure work,
              technical writing, or automation consulting.
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/Eunice2000" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="GitHub">
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://twitter.com/eunice_adediran" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="Twitter">
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/eunice-adediran-b409b61b1/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.instagram.com/adediran.eunice/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="Instagram">
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.fiverr.com/eunice_services?public_mode=true" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="Fiverr">
                  <SiFiverr />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.upwork.com/freelancers/~0150d78b719a890f01" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="Upwork">
                  <SiUpwork />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://www.youtube.com/@NicesTechWorld" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="YouTube">
                  <FaYoutube />
                </a>
              </li>
              <li className="social-icons">
                <a href="https://selar.com/m/adediraneunice" target="_blank" rel="noreferrer" className="icon-colour home-social-icons" aria-label="Selar">
                  <img src={selarLogo} alt="" />
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

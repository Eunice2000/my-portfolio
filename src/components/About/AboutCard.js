import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            I am <span className="purple">Eunice Adebukola Adediran</span>, a
            DevOps Engineer based in Lagos, Nigeria. My work is centered on
            helping teams deploy faster, recover confidently, and run cloud
            infrastructure with less manual effort.
            <br />
            <br />
            I work across CI/CD, infrastructure as code, containerization,
            monitoring, and DevSecOps. I enjoy making complex systems easier to
            operate by documenting decisions, automating repeatable tasks, and
            building pipelines that make quality and security part of the normal
            delivery flow.
            <br />
            <br />
            Beyond implementation, I care about clarity: clear architecture,
            clear runbooks, clear deployment processes, and clear communication
            between engineering teams.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Building cloud automation and deployment systems
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing technical content that simplifies DevOps
            </li>
            <li className="about-activity">
              <ImPointRight /> Improving reliability, observability, and quality
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

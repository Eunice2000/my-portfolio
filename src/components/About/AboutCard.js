import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Adediran Eunice Adebukola, a passionate DevOps engineerand software engineer based in </span>
             <span className="purple"> Lagos state, Nigeria.</span>
            <br />
            <br />
            Armed with a degree in Computer Science from university, I have immersed myself in the world of technology, specializing in the intricate fusion of development and operations.
            <br />
            My journey in DevOps isn't confined to conventional practices; I am deeply invested in DevSecOps, ensuring that security is ingrained into every facet of software development. 
            <br />
            <br />
            Leveraging a plethora of tools, I orchestrate seamless Continuous Integration and Continuous Deployment (CI/CD) pipelines. Git and GitHub serve as my trusted allies in version control and collaboration, while GitHub Actions and Jenkins form the backbone of my code analysis processes.
            To maintain the integrity and performance of applications, I rely on robust monitoring solutions. SonarQube aids in code quality assessment, while Loki, Grafana, and Prometheus offer unparalleled insights into containerized environments orchestrated through Docker and Kubernetes. Moreover, I harness the power of cloud providers such as AWS, DigitalOcean, and Google Cloud to architect scalable and resilient infrastructures.

            My commitment to excellence extends beyond technical proficiency; I prioritize crafting architectures that prioritize uptime and reliability. By employing best practices and staying abreast of emerging trends, I ensure that the solutions I deliver not only meet but exceed expectations.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
        
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Lover of christ
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Quality assurance
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Success is not final, failure is not fatal: It is the courage to continue that counts."{" "}
          </p>
          <footer className="blockquote-footer">Winston Churchill





</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

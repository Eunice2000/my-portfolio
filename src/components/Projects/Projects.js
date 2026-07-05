import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloudformation from "../../Assets/Projects/cloudformation.png";
import converter from "../../Assets/Projects/converter.png";
import shielding from "../../Assets/Projects/Shielding-student.png";
import cashmint from "../../Assets/Projects/cashmint.png";
import Devinis from "../../Assets/Projects/devinis-shop.png";
import digitalOcean from "../../Assets/Projects/terra-gcp.png";

const projects = [
  {
    imgPath: digitalOcean,
    title: "Secure DigitalOcean Infrastructure",
    description:
      "Provisioned application infrastructure with Terraform and Ansible, then used HashiCorp Vault to improve secret handling across deployment workflows.",
    impact:
      "Shows my ability to combine cloud provisioning, configuration management, and security-aware delivery.",
    tags: ["Terraform", "Ansible", "Vault", "DigitalOcean"],
    ghLink: "https://github.com/Eunice-js/terrafrom-DO",
  },
  {
    imgPath: cloudformation,
    title: "CloudFormation S3 Encryption Stack",
    description:
      "Built an AWS CloudFormation stack that creates configurable encrypted S3 buckets with parameterized encryption choices and useful stack outputs.",
    impact:
      "Demonstrates reusable AWS infrastructure templates with security controls built into the provisioning flow.",
    tags: ["AWS", "CloudFormation", "S3", "Security"],
    ghLink: "https://github.com/Eunice2000/cloudformation",
  },
  {
    imgPath: converter,
    title: "Serverless Image Converter",
    description:
      "Created a serverless image-processing workflow using Terraform, AWS Lambda, S3 triggers, and Node.js for event-driven file transformation.",
    impact:
      "Highlights event-driven cloud architecture, automation, and practical serverless infrastructure design.",
    tags: ["AWS Lambda", "S3", "Terraform", "Node.js"],
    ghLink: "https://github.com/Eunice2000/aws-lmbd-image-converter",
  },
  {
    imgPath: Devinis,
    title: "Devinis Shop Deployment",
    description:
      "Worked on an e-commerce application deployment flow using GitHub Actions and Terraform to support client and backend deployment on AWS.",
    impact:
      "Connects product engineering with deployment automation and cloud infrastructure operations.",
    tags: ["AWS", "GitHub Actions", "Terraform", "CI/CD"],
    ghLink: "https://github.com/Eunice2000/Devinis-shop",
  },
  {
    imgPath: cashmint,
    title: "CashMint Fintech App",
    description:
      "Built a savings-focused web application inspired by modern fintech workflows, with attention to user experience and secure product thinking.",
    impact:
      "Shows full-stack product awareness beyond infrastructure, useful for collaborating closely with product teams.",
    tags: ["React", "Fintech", "Frontend"],
    ghLink: "https://github.com/Eunice2000/Cashmint-Techathon-Project",
    demoLink: "https://cashmint-project.netlify.app/",
  },
  {
    imgPath: shielding,
    title: "Shielding Students",
    description:
      "Developed an educational web application that shares resources and awareness content to help students recognize and respond to sexual abuse.",
    impact:
      "Reflects mission-driven engineering and the ability to build clear, accessible digital resources.",
    tags: ["React", "Awareness", "Web App"],
    ghLink: "https://github.com/Eunice2000/Shielding-Students",
    demoLink: "https://student-sexual-assault.netlify.app/",
  },
];

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <div className="section-intro centered">
          <p className="eyebrow">Selected Work</p>
          <h1 className="project-heading">
            Cloud, automation, and product projects with real delivery context.
          </h1>
          <p>
            A focused look at projects that show how I approach infrastructure,
            CI/CD, serverless workflows, and useful web experiences.
          </p>
        </div>
        <Row className="project-grid">
          {projects.map((project) => (
            <Col md={6} lg={4} className="project-card" key={project.title}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import cloudformation from "../../Assets/Projects/cloudformation.png";
import converter from "../../Assets/Projects/converter.png";
import shielding from "../../Assets/Projects/Shielding-student.png";
import cashmint from "../../Assets/Projects/cashmint.png";
import Devinis from "../../Assets/Projects/devinis-shop.png";
import movies from "../../Assets/Projects/terra-gcp.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="hashicorp-Digital-ocean"
              description="Employing a robust combination of HashiCorp Vault for secure secret management, Terraform for seamless infrastructure provisioning, and Ansible for efficient configuration on DigitalOcean, to ensure a streamlined and highly secure deployment process. With Vault safeguarding sensitive data, Terraform orchestrating infrastructure setup, and Ansible managing configuration, our solution offers unparalleled reliability and security in deploying applications on the DigitalOcean platform"
              ghLink="https://github.com/Eunice-js/terrafrom-DO"
              // demoLink="https://cashmint-project.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cashmint}
              isBlog={false}
              title="cashmint-project"
              description="CashMint Project is a meticulously crafted web application inspired by the renowned financial platform PiggyVest. Offering users a seamless and secure experience, CashMint empowers individuals to cultivate healthy financial habits through smart savings and investment opportunities"
              ghLink="https://github.com/Eunice2000/Cashmint-Techathon-Project"
              demoLink="https://cashmint-project.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movies}
              isBlog={false}
              title="Movie-capstone"
              description="Movie Capstone Project is a user-friendly web application designed to showcase an extensive array of movies, complete with detailed descriptions. Offering a curated selection of films across various genres, users can explore and discover their next cinematic adventure with ease."
              ghLink="https://github.com/Eunice2000/movie-capstone-project"
              demoLink="https://movie-capstone-project.netlify.app/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shielding}
              isBlog={false}
              title="Shielding-students"
              description="Shielding Student is a powerful web application dedicated to educating and raising awareness about sexual abuse while providing essential resources to mitigate sexual assault. Through informative content and support mechanisms, Shielding Student aims to empower students to recognize, prevent, and respond effectively to instances of sexual misconduct, fostering a safer and more informed educational environment"
              ghLink="https://github.com/Eunice2000/Shielding-Students"
              demoLink="https://student-sexual-assault.netlify.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cloudformation}
              isBlog={false}
              title="CloudFormation Stack"
              description="This CloudFormation stack deploys an S3 bucket with user-defined encryption type. The user can select either SSE-S3 or KMS encryption for the S3 bucket during stack creation. All the values, including the bucket name and encryption type, are inputted by the user as parameters. The stack also utilizes Outputs to provide information about the deployed resources."
              ghLink="https://github.com/Eunice2000/cloudformation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Devinis}
              isBlog={false}
              title="Devinis-shop"
              description="Devinis shop s a full-featured shopping cart with PayPal & credit/debit payments, using terraform as the infrastructure as code and github action to deploy both the client and backend side on aws ."
              ghLink="https://github.com/Eunice2000/Devinis-shop"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={converter}
              isBlog={false}
              title="aws-lmbd-image-converter"
              description="Serverless Image Provisioning with Terraform, Lambda, and S3
              This repository demonstrates the provisioning of a serverless image processing solution using Terraform, AWS Lambda, and Node.js. The solution allows you to upload images to an S3 bucket, trigger a Lambda function, and perform image processing tasks.."
              ghLink="https://github.com/Eunice2000/aws-lmbd-image-converter"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

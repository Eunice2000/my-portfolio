import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt={`${props.title} preview`} />
      <Card.Body>
        <div className="project-tags">
          {props.tags?.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        {props.impact && <p className="project-impact">{props.impact}</p>}
        <div className="project-actions">
          <Button variant="primary" href={props.ghLink} target="_blank" rel="noreferrer">
            <BsGithub /> GitHub
          </Button>
          {!props.isBlog && props.demoLink && (
            <Button variant="primary" href={props.demoLink} target="_blank" rel="noreferrer">
              <CgWebsite /> Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

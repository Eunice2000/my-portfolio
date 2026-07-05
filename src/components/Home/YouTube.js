import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";

const channelUrl = "https://www.youtube.com/@NicesTechWorld";
const featuredVideoUrl = "https://www.youtube.com/watch?v=N9AIDl_EGFo&t=200s";

function YouTube() {
  return (
    <Container fluid className="youtube-section" id="youtube">
      <Container>
        <Row className="align-items-center youtube-grid">
          <Col lg={5}>
            <p className="eyebrow">Nices Tech World</p>
            <h2>Watch my featured DevOps tutorial.</h2>
            <p>
              I also share practical technology content on YouTube, from cloud
              engineering ideas to hands-on lessons that help people understand
              tools, systems, and real engineering workflows.
            </p>
            <div className="youtube-actions">
              <a
                className="primary-action youtube-action"
                href={featuredVideoUrl}
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube /> Watch on YouTube
              </a>
              <a
                className="secondary-action"
                href={channelUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit Channel
              </a>
            </div>
          </Col>

          <Col lg={7}>
            <div className="youtube-player-shell">
              <iframe
                src="https://www.youtube.com/embed/N9AIDl_EGFo?start=200&rel=0"
                title="Nices Tech World featured DevOps tutorial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default YouTube;

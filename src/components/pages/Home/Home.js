import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from '../Projects/Projects.js'
import About from '../About/About'
import Resume from '../Resume/Resume.js'
import { DeveloperAnimation } from '../../../lotties/Lotties';
import Tilt from "react-parallax-tilt";
import { AiOutlineDownload } from "react-icons/ai";
import Card from "react-bootstrap/Card";
import Copy from "../../common/Copy";
import { ImPointRight } from "react-icons/im";

function Home() {
  const pdf = 'https://drive.google.com/file/d/1trsOB4sbv5gKRQp-bzmmFYhwvPZfBC0g/view?usp=sharing'
  const cal = 'https://calendar.ai/syed'
  const dwn = 'https://docs.google.com/document/d/1XvIdphkNLPkICvHjXUbf2pneT9tc472I/edit?usp=sharing&ouid=112689532247814358148&rtpof=true&sd=true'
  return (
    <section style={{ background: "#14161F" }}>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} xs={12} style={{ position: "relative" }}>
              <div className="developer-animation">
                <Tilt>
                  <DeveloperAnimation />
                </Tilt>
              </div>
            </Col>
            <Col xs={12} md={7} className="home-header">
              <h1 className="heading">
                Indigo Prime International
              </h1>
              <p className="sub-heading">
                Your trusted partner in international trade
              </p>
              <div className="main-content">
                <p className="description">
                  We specialize in export/import business and offer end-to-end solutions for all your trade requirements. Our team of experts provides personalized services to help you navigate through the complexities of international trade and make it hassle-free for you. We work with a wide range of industries and ensure timely delivery of goods with the highest level of quality assurance. Get in touch with us today to explore the opportunities in the global market.
                </p>
                <Row>
                  <Col>
                    <div className="buttons">
                      <Button variant="primary" className="action-btn" href={pdf} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; Get Our Profile
                      </Button>
                      <Button variant="outline-primary" className="action-btn" href={cal} target="_blank">
                        <AiOutlineDownload />
                        &nbsp; Schedule a Meeting
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

// CSS rules
.home-section {
  height: 100vh;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.developer-animation {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}


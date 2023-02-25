import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../../common/Particle";
import Type from "./Type";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function Home() {
  return (
    <section>
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }} className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row className="justify-content-center">
            <Col md={5} xs={12} sm={12} className="home-picture">
              <div className="developer-animation">
                <img src="/images/home-pic.jpg" alt="home pic" />
              </div>
            </Col>
            <Col xs={12} className="home-header">
              <h1 className="heading">
                Welcome to Indigo Prime International
              </h1>
              <div className="main-name">
                <p>
                  We are a leading export company based in India, dealing in a wide range of products including textiles, handicrafts, home decor, and more.
                </p>
                <p>
                  With over 10 years of experience in the industry, we have established ourselves as a reliable and trusted exporter. Our commitment to quality, customer satisfaction, and ethical business practices sets us apart from the competition.
                </p>
                <p>
                  Whether you are a wholesaler or a retailer, we have the expertise and resources to fulfill your export needs. Contact us today to discuss how we can help grow your business.
                </p>
                <Button variant="primary" className="action-btn" href="#contact">
                  Contact Us
                </Button>
              </div>
            </Col>
          </Row>
          <Row className="home-skills">
            <Col md={12} xs={12}>
              <h1 className="heading">
                Our Products
              </h1>
            </Col>
            <Col md={4} xs={12}>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      <ImPointRight /> Textiles
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      <ImPointRight /> Handicrafts
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} xs={12}>
              <Card className="quote-card-view">
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>
                      <ImPointRight /> Home Decor
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  
  return (
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywright">
          <h3>Designed and Developed by Syed Ms</h3> 
        </Col>
        <Col md={4} className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a
                href="https://github.com/Smssyed8/"
                style={{ color: "white" }}
              >
                <AiFillGithub />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/syedmuazzamsiddiqhi/"
                style={{ color: "white" }}
              >
                <FaLinkedinIn />
              </a>
            </li>
            
            <li className="social-icons">
              <a
                href="https://www.instagram.com/iamsyedms/"
                style={{ color: "white" }}
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"; // import custom CSS file for styling

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer-container"> {/* added a custom CSS class for styling */}
      <Row>
        <Col md={4} className="footer-content">
          <h3 className="footer-heading">Designed and Developed by Syed Ms</h3> {/* added a custom CSS class for styling */}
        </Col>
        <Col md={4} className="footer-content">
          <h3 className="footer-heading">© {year} Indigo Prime. All rights reserved.</h3> {/* updated copyright text */}
        </Col>
        <Col md={4} className="footer-content">
          <ul className="social-icons-list"> {/* added a custom CSS class for styling */}
            <li>
              <a href="https://github.com/Smssyed8/" className="social-icon-link">
                <AiFillGithub className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/syedmuazzamsiddiqhi/" className="social-icon-link">
                <FaLinkedinIn className="social-icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/iamsyedms/" className="social-icon-link">
                <AiFillInstagram className="social-icon" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;

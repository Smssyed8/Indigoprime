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
import { ImPointRight } from "react-icons/im";

function Home() {
 const pdf = 'https://drive.google.com/file/d/1trsOB4sbv5gKRQp-bzmmFYhwvPZfBC0g/view?usp=sharing'
  const cal = 'https://calendly.com/s-muazzam-siddiqhi'
return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
      <Container className="home-content">
        
        <Row>
            <Col md={5} xs={12}  sm={12} style={{ paddingBottom: 20, position: "absolute" }}>
        <div className="developer-animation" >
        <Tilt><DeveloperAnimation /></Tilt>
        </div>
              

            </Col>
            <Col  xs={12}  className="home-header1">

              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong  > &nbsp;Syed Muazzam Siddiqhi</strong>

              </h1>

            <div style={{ paddingLeft: 50, textAlign: "left" }} className="main-name">
              <p> Scroll below and copy the details </p>
                <Type />
                <br />
                <br />
                <br />
                <Button variant="primary" href={pdf} target="_blank">
                  <AiOutlineDownload /> 
                  &nbsp;Get Résumé
                </Button>
                <br />
                <br />
               <Button variant="primary" href={cal} target="_blank">
                  <AiOutlineDownload /> 
                  &nbsp;My Calendar
                </Button>
                </div>

<br/>
               
             
             
            </Col>

          </Row>
        <Row>
         
          
           
    <Col  xs={12}  className="home-header">
<Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <ImPointRight /> <span className="purple"> Total Years of experience  </span><br/>
            6 years of Experience in Software Development following Agile.<br/>
            Worked in Arisglobal for 4 years, White clarke now called Solifi for 2 years<br/>
            <ImPointRight /><span className="purple"> Relevant years</span><br/>
            Java 1.7, 1.8 -> 6 years<br/>
            Spring Boot and microservices -> 2 years<br/>
            Database/PlSql/Sql -> 3 years<br/>
            RestFul Api -> 3 years<br/><br/>
            ################################<br/>
            Experienced In backend software application development with Java, Spring boot, Microservices, Oracle SQL, PostgreSQL, Restful Architecture, Birt report, MongoDB, Apache camel, Apache ActiveMQ, Javascript, Docker, Teamcity, DS, Vm Template.
           <br/><br/>
           Personal details
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Email: s.muazzam.siddiqhi@gmail.com
            </li>
            <li className="about-activity">
              <ImPointRight /> Phone: +918951631056
            </li>
            <li className="about-activity">
              <ImPointRight /> Availability: I may miss phone call, please drop a mail, you can schedule meeting directly after 3 pm.
            </li>
             <li className="about-activity">
              <ImPointRight /> Resume: Latest attached here, please download </li>
             <li className="about-activity">
              <ImPointRight /> Need more details?: Request you to drop a mail </li>
               <li className="about-activity">
              <ImPointRight /> I am serving notice period: Last working day is Jan 19th 2022 </li>
          </ul>
        </blockquote>
        </Card.Body>
        </Card>
        </Col>




          </Row>
          
                
        </Container>

      </Container>
     
      {/* <Home2 /> */}
      <About />
      {/* <Projects /> */}
      {/* <Resume /> */}
    </section>
  );
}

export default Home;

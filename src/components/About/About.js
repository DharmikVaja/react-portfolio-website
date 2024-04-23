import React, { forwardRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/Images/about.png";
import Toolstack from "./Toolstack";
import NavBar from "../Navbar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const About = forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref} name="about">
        <NavBar />
        <ScrollToTop />
        <Container fluid className="about-section">
          <Particle />
          <Container>
            <Row style={{ justifyContent: "center", padding: "10px" }}>
              <Col
                md={7}
                style={{
                  justifyContent: "center",
                  paddingBottom: "50px",
                }}
              >
                <h1
                  style={{ fontSize: "2.3em", paddingBottom: "20px" }}
                  className="about_h1"
                >
                  #Know<strong className="purple">Who</strong>I'm
                </h1>
                <Aboutcard />
              </Col>
              <Col
                md={5}
                style={{ paddingTop: "120px", paddingBottom: "50px" }}
                className="about-img"
              >
                <img src={laptopImg} alt="about" className="img-fluid" />
              </Col>
            </Row>
            <h1 className="project-heading">
              My Professional <strong className="purple">Skillset </strong>
            </h1>

            <Techstack />

            <h1 className="project-heading">
              <strong className="purple">Tools</strong> I use
            </h1>
            <Toolstack />

            <Github />
          </Container>
        </Container>
      </div>
    </>
  );
});

export default About;

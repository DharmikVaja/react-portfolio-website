import React, { useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Images/home-main.svg";
import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import About from "../About/About";
import FindMeOn from "../FindMeOn/FindMeOn";
import NavBar from "../Navbar";

function Home() {
  const aboutRef = useRef(null);

  return (
    <>
      <NavBar aboutRef={aboutRef} />
      <section>
        <Container fluid className="home-section" id="home">
          <Particle />
          <Container className="home-content">
            <Row>
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
                <h1 className="heading-name">
                  Myself
                  <strong className="main-name"> Dharmik Vaja </strong>& I'm...
                </h1>
                <div style={{ padding: 50, textAlign: "left" }}>
                  <Type />
                </div>
              </Col>
              <Col md={5} style={{ paddingBottom: 20 }}>
                <Tilt>
                  <img
                    src={homeLogo}
                    alt="home pic"
                    className="img-fluid"
                    style={{ maxHeight: "450px" }}
                  />
                </Tilt>
              </Col>
            </Row>
          </Container>
        </Container>
        <About ref={aboutRef} />
        <FindMeOn />
      </section>
    </>
  );
}

export default Home;

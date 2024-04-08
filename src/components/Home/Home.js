import React, { useRef } from "react";
// import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/Images/home-main.svg";
import homeGif from "../../Assets/Images/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966.gif";
import homeGif1 from "../../Assets/Images/home_gif.gif";
import Programmer from "../../Assets/Images/marginalia-a-person-sitting-in-front-of-a-computer-screen.gif";
import Programmer1 from "../../Assets/Images/coworking-male-programmer-writing-program-code.gif";
import Programmer2 from "../../Assets/Images/juicy-man-programmer-writing-code-and-make-web-design-on-a-pc.gif";
import Programmer3 from "../../Assets/Images/95116-coder.gif";

import Particle from "../Particle";
import Type from "./Type";
import Tilt from "react-parallax-tilt";
import About from "../About/About";
import FindMeOn from "../FindMeOn/FindMeOn";
import NavBar from "../Navbar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function Home() {
  const aboutRef = useRef(null);

  return (
    <>
      <ScrollToTop />
      <NavBar aboutRef={aboutRef} />

      <div className="container-fluid home-section" id="home">
        <Particle />
        <div className="container home-content">
          <div className="row">
            <div className="col-md-7 home-header">
              <h1 style={{ paddingBottom: "15px" }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading-name">
                Myself
                <strong className="main-name"> Dharmik Vaja </strong>& I'm...
              </h1>
              <div style={{ padding: "45px", textAlign: "left" }}>
                <Type />
              </div>
            </div>
            <div className="col-md-5" style={{ paddingBottom: "20px" }}>
              <div data-tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid "
                  style={{ maxHeight: "550px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <About ref={aboutRef} />
      <FindMeOn />
    </>
  );
}

export default Home;

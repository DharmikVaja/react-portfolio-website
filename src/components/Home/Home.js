import React, { useRef } from "react";
import myPic1 from "../../Assets/Images/mypic_portfolio_blur.jpg";
import Particle from "../Particle";
import Type from "./Type";
import About from "../About/About";
import FindMeOn from "../FindMeOn/FindMeOn";
import NavBar from "../Navbar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

function Home(props) {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <ScrollToTop />
      <NavBar scrollToAbout={scrollToAbout} />
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
            <div
              className="col-md-5 d-flex justify-content-center pt-3"
              style={{ paddingBottom: "20px" }}
            >
              <div data-tilt>
                <img
                  src={myPic1}
                  alt="home pic"
                  className="img img-fluid myHomePic"
                  style={{
                    maxHeight: "500px",
                    borderRadius: "400px",
                    zIndex: "10",
                    opacity: "0.8",
                    border: "2px solid white",
                  }}
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

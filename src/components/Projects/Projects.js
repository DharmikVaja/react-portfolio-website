import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import NavBar from "../Navbar";
import todolist from "../../Assets/Projects/todolist_.png";
import nof from "../../Assets/Projects/NOF_.png";
import BookESell from "../../Assets/Projects/BookEsell.png";
import carEvol from "../../Assets/Projects/car-evolution.png";
import real_estate from "../../Assets/Projects/real-estate.png";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import psdGen from "../../Assets/Projects/psd generator.png";


function Projects() {
  return (
    <>
      <NavBar />
      <ScrollToTop />
      <Container fluid className="project-section">
        <Particle />
        <Container>
          <h1 className="project-heading">
            My Recent <strong className="purple">Works </strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are a few projects I've worked on recently.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={nof}
                isBlog={false}
                title="National Olympiad foundation website"
                description="The project is based on the olympiad exam held nationally, where student can create account, login and get access to buy books and can give the demo test for scoring good marks in upcoming test exams"
                ghLink="https://github.com/DharmikVaja/NOF-React-Project"
                demoLink="https://dv-nof-india.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={BookESell}
                isBlog={false}
                title="BookESell website"
                description="Online books selling website created with different categories of logging in as buyer, seller and admin. who have rights to upload, buy or sell the books accordingly, books details finds and updates are possible here."
                ghLink="https://github.com/DharmikVaja/EBookSell-App"
                demoLink=""
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={psdGen}
                isBlog={false}
                title="Password Generator"
                description="Password generator using Reactjs by which we can generate the password with our type of need, with letters, numbers, symbols, etc. and can copy it for using further."
                ghLink="https://github.com/DharmikVaja/password-generator"
                demoLink="https://dv-password-generator.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={todolist}
                isBlog={false}
                title="todo list"
                description="Todo list which includes tasks to be added, remove and update. also can search tasks list."
                ghLink="https://github.com/DharmikVaja/react-todo-list"
                demoLink="https://dharmikvaja-todoapp.netlify.app/"
              />
            </Col>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={carEvol}
                isBlog={false}
                title="Car-Evolution"
                description="UI of Car rental website showcasing the power and versatility of modern web technologies, is an innovative project aimed at revolutionizing the car rental industry, the project is as a learning initiative in UI design with ReactJS,"
                ghLink="https://github.com/DharmikVaja/car-evolution-rent"
                demoLink="https://dv-car-evolution.netlify.app/"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={real_estate}
                isBlog={false}
                title="RealEstate Website"
                description="practice UI with Regenics site to find the real estate at the best price.the project is cerated while learning UI design with ReactJS"
                ghLink=""
                demoLink=""
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Projects;

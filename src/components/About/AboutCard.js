import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dharmik Vaja </span>
            from <span className="purple"> Surat, India.</span>
            <div />
            I am currently working as an Intern in Web developer at Kurm
            Infotech.
            <div />
            I have completed Bachelors of
           <div/>
            <span className="purple"> IT Engineering </span> (B.E/ B.Tech)
            degree at Government Engineering College (GEC) Bhavnagar . Apart
            from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Making UI designs
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Dharmik</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

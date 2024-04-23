import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <h1 style={{ fontSize: "1.1em" }} className="py-2 text-start">
            LET ME <span className="purple"> INTRODUCE </span> MYSELF...
          </h1>
          <div style={{ textAlign: "justify" }} className="py-3">
            Hi Everyone, I am <span className="purple">Dharmik Vaja </span>
            from <span className="purple"> Surat, India.</span>
            <div>
              I fell in love with programming & have at least learnt something,
              I think… 🤷‍♂️,
            </div>
            <div className="py-3">
              I'm currently as {""}
              <span className="purple">Web developer Intern</span> at{" "}
              <span className="purple">Kurm Infotech </span>since Jan 2024
            </div>
            <div />
            I've completed Bachelors of
            <span className="purple"> IT Engineering </span> (B.E/ B.Tech)
            degree from Government Engineering College (GEC) Bhavnagar.
            <div className="py-3">
              Apart from coding, some other activities that I love to do!
            </div>
            <div />
          </div>
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
            "Strive to build the things that makes a difference! "
          </p>
          <footer className="blockquote-footer">Dharmik Vaja</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

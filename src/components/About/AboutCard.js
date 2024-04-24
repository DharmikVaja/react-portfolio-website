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
          <ul>
            <li style={{ textAlign: "justify" }} className="py-2">
              Hi Everyone, I am <span className="purple">Dharmik Vaja </span>
              from <span className="purple"> Surat, India.</span>
              <li>
                I fell in love with programming & have at least learnt
                something,
                <div /> I think… 🤷‍♂️,
              </li>
              <li className="py-2">
                I have experience as an {""}
                <span className="purple">Web developer </span>Intern at{" "}
                <a
                  href="https://www.kurminfotech.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none fw-bold"
                >
                  {" "}
                  <span className="purple">Kurm Infotech </span>
                </a>{" "}
                since Jan 2024
              </li>
              <div />
              <li>
                I am proficient in  <span className="purple">Frontend web Development</span> . currently seeking
                entry-level/Fresher Web Developer jobs to apply to contribute effectively
                to dynamic projects and further professional growth
              </li>
              <li className="py-2">
                I've completed {""}
                <span className="purple">Bachelors of IT Engineering </span> (B.E/ B.Tech)
                degree from Government Engineering College (GEC) Bhavnagar.
              </li>
              <div className="pt-2">
                Apart from coding, some other activities that I love to do!
              </div>
              <div />
            </li>
          </ul>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Life is like riding a bicycle. To keep your balance, you must keep moving!"
          </p>
          <footer className="blockquote-footer ">Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

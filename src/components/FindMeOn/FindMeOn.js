import React from "react";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Images/avatar.svg";
import Tilt from "react-parallax-tilt";

const FindMeOn = () => {
  return (
    <>
      <Container>
        <Row className="pb-3">
          <Col md={12} className="home-about-social">
            <div className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </div>
            <h2 className="">
              Feel free to <span className="purple">connect </span>with me!
            </h2>
            <p className="">FIND ME ON</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DharmikVaja"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dharmik-vaja-921899260/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dharmik_vaja/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FindMeOn;

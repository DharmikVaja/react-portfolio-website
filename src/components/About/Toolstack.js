import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiWindows11,
  SiGithub,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row
      style={{ justifyContent: "center", paddingBottom: "50px" }}
      className="py-5"
    >
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows11 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      {/*      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
    </Row>
  );
}

export default Toolstack;
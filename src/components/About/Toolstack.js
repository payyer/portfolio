import React from "react";
import { Col, Row } from "react-bootstrap";

import vsCode from "../../Assets/TechIcons/vscode.svg";
import antigravity from "../../Assets/TechIcons/Google-Antigravity-Icon-Full-Color.png";
import gemini from "../../Assets/TechIcons/gemini-color.svg";
import claude from "../../Assets/TechIcons/claude-color.svg";
import cursor from "../../Assets/TechIcons/cursor.svg";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={antigravity} alt="Antigravity" className="tech-icon-images" />
        <div className="tech-icons-text">Antigravity</div>
      </Col>
      <Col xs={4} md={2} className=" tech-icons">
        <img src={cursor} alt="Cursor AI" className="tech-icon-images" />
        <div className="tech-icons-text">Cursor</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={gemini} alt="Gemini" className="tech-icon-images" />
        <div className="tech-icons-text">Gemini</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={claude} alt="Claude Code" className="tech-icon-images" />
        <div className="tech-icons-text">Claude</div>
      </Col>
      
    </Row>
  );
}

export default Toolstack;




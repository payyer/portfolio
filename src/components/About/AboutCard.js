import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I'm <span className="purple">Lê Quốc Anh</span>{" "}
            from <span className="purple">Ho Chi Minh City, Vietnam</span>.
            <br />
            I'm currently working as a{" "}
            <span className="purple">Frontend Developer</span> at{" "}
            <span className="purple">Allrow Labo</span> and taking on{" "}
            <span className="purple">freelance React projects</span>.
            <br />
            I hold a{" "}
            <span className="purple">B.S. in Information Technology</span> from{" "}
            <span className="purple">Thuy Loi University</span>.
            <br />
            <br />
            Outside of coding, here's a little more about me:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Side Projects & UI Experiments 💻
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Web Technologies 🚀
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
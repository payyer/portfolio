import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/qa.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a Frontend Developer who loves transforming designs into fast,
              interactive web experiences — from pixel-perfect interfaces to
              scalable e-commerce platforms.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  HTML5, CSS3, JavaScript, and TypeScript{" "}
                </b>
              </i>
              — with a strong focus on component-based architecture and clean,
              maintainable code.
              <br />
              <br />
              My key areas of interest include building
              <i>
                <b className="purple">
                  {" "}
                  Responsive Web Applications, UI Component Systems,{" "}
                </b>
              </i>
              and crafting smooth user experiences that work seamlessly across all
              devices and browsers.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> React.js </b> and modern tools like{" "}
              <i>
                <b className="purple">TailwindCSS</b> and{" "}
                <b className="purple">React Query</b>
              </i>
              {" "} and as a lifelong gamer, I'm especially drawn to interactive,
              performance-driven web experiences.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img style={{ borderRadius: "100%", width: "80%", height: "auto" }} src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

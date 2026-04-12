import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import bookmedi from "../../Assets/Projects/bookmedi_client.jpg";
import makeMeBanana from "../../Assets/Projects/makemebanana.jpg";
import fukaya from "../../Assets/Projects/fukaya.jpg";
import gotemba from "../../Assets/Projects/gotemba.jpg";
import ad from "../../Assets/Projects/ad.jpg";
import premiumOutlets from "../../Assets/Projects/premium_outlets_25th.jpg";

function Projects() {
  return (
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
              imgPath={bookmedi}
              isBlog={false}
              title="Bookmedi — Full Platform"
              description="Full e-commerce platform with both customer-facing storefront (Client) and comprehensive management system (Admin). Built with ReactJS, Zustand, React Query for optimized data fetching, and reusable UI components using TailwindCSS and Shadcn UI."
              demoLink="https://demo.bookmedi.io.vn/"
              demoLabel="Client Demo"
              demoLink2="https://admin.bookmedi.david.io.vn/"
              demoLabel2="Admin Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={makeMeBanana}
              isBlog={false}
              title="Make Me Banana"
              description="E-commerce platform with both client storefront and admin dashboard. Delivered scalable, performance-oriented solutions independently from concept to deployment using modern React ecosystem tools."
              demoLink="https://makemebanana.vn/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fukaya}
              isBlog={false}
              title="Fukayahanazono"
              description="Pixel-perfect responsive web interface developed for a Japanese client at Allrow Labo. Built with HTML, SCSS, and JavaScript using liquid layouts and modern CSS techniques for cross-browser compatibility."
              ghLink=""
              demoLink="https://www.premiumoutlets.co.jp/fukayahanazono/sp/3rd/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gotemba}
              isBlog={false}
              title="Gotemba Summer Festival"
              description="A vibrant seasonal campaign website for Premium Outlets Japan. Featuring custom animations and responsive layouts tailored for specialized festival promotions."
              ghLink=""
              demoLink="https://www.premiumoutlets.co.jp/gotemba/sp/natsumatsuri/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ad}
              isBlog={false}
              title="Premium Outlets — AD Menu Portal"
              description="A large-scale B2B marketing platform for Premium Outlets Japan, managing advertisement and event space across 10+ major locations. This project consists of nearly 100 pages of complex media menus."
              ghLink=""
              demoLink="https://www.premiumoutlets.co.jp/ad/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={premiumOutlets}
              isBlog={false}
              title="Premium Outlets 25th Anniversary"
              description="Special anniversary event showcase. Developed a sleek, high-performance landing page to celebrate 25 years of excellence in retail experience."
              ghLink=""
              demoLink="https://drive.google.com/file/d/127xgsAIJdyiqsZFLl4mkeMmdES5VV2cX/view"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
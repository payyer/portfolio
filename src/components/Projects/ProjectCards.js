import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flexGrow: 1 }}>
          {props.description}
        </Card.Text>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "10px" }}>
          {props.ghLink && (
            <Button variant="primary" href={props.ghLink} target="_blank">
              <BsGithub /> &nbsp;
              {props.isBlog ? "Blog" : "GitHub"}
            </Button>
          )}

          {props.ghLinkFE && (
            <Button variant="primary" href={props.ghLinkFE} target="_blank">
              <BsGithub /> &nbsp;
              {"FE Github"}
            </Button>
          )}

          {props.ghLinkBE && (
            <Button variant="primary" href={props.ghLinkBE} target="_blank">
              <BsGithub /> &nbsp;
              {"BE Github"}
            </Button>
          )}

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {props.demoLabel || "Demo"}
            </Button>
          )}

          {!props.isBlog && props.demoLink2 && (
            <Button
              variant="primary"
              href={props.demoLink2}
              target="_blank"
            >
              <CgWebsite /> &nbsp;
              {props.demoLabel2 || "Demo 2"}
            </Button>
          )}
        </div>

      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

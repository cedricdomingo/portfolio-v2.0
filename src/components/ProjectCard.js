import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>

          <br></br><br></br>
          <a href={githubLink} className="github-link" target="_blank" rel="noopener noreferrer">
            &#128279; View on GitHub</a>
        </div>
      </div>
    </Col>
  )
}
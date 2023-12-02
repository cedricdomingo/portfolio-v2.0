import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/footer-logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div class="footer-divider"></div>
        <Row className="align-items-center">
          <Col xs={12} className="text-center">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/allencedricdomingo/" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="" /></a>
              <a href="https://github.com/cedricdomingo" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="" /></a>
            </div>
            <p>Designed and coded in Visual Studio Code by <b>Allen Cedric</b>. <br></br>
              Built with React Bootstrap, deployed using <b>Vercel</b>.</p>
            {/* Row for the logo */}
            <Row className="justify-content-center">
              <Col xs={12} className="text-center">
                <img src={logo} alt="Logo" />
                <br></br>
              </Col>
            </Row>
            {/* Row for the social icons */}
            <Row className="justify-content-center">
              <Col xs="auto" className="text-center">
                <div className="social-icon">
                  <span className="navbar-text">
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

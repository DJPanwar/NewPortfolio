import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/whitelogo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6} className="text-center text-sm-start pb-3 ml-14">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end" >
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/deepakpanwar/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.instagram.com/deepakpanwar512/?igsh=MTA1Z3N2bWV1bHlvdQ%3D%3D"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Deepak Panwar</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

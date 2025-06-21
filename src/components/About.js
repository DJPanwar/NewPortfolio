import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const About = () => {
  return (
    <section className="about" id="abouts">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About</h2>
                  <p>Hi, I'm Deepak Panwar — a recent B.Tech graduate in Computer Science from B.K. Birla Institute of Engineering and Technology, Pilani.</p>
                  <p>
                    With a solid foundation in programming and a strong eye for design, I’m passionate about building engaging user experiences and scalable web applications. I specialize in frontend development using React, work comfortably with backend technologies like Node.js and Python, and have a growing expertise in UI/UX design. I'm excited to pursue opportunities as a UI/UX designer or full-stack developer and contribute to meaningful, real-world solutions.
                  </p>
                  <p>
                    Email - deepak512panwar@gmail.com
                  </p>
                  <p>
                    Phone - +919521723305
                  </p>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

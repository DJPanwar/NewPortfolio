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
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About</h2>
                <p>Hey there! I'm Deepak Panwar, currently in the final year of my B.Tech in Computer Science at B K Birla Institute of Engineering And Technology, Pilani.</p>  
                <p>
                I'm excited about becoming a developer and look forward to starting my journey in the dynamic and ever-evolving IT industry in the near future.
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

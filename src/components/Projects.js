import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/image1.png";
import projImg2 from "../assets/img/image2.png";
import projImg3 from "../assets/img/Logodesign.png";
import projImg4 from "../assets/img/loginSignup.png";
import projImg5 from "../assets/img/freelancer.png";
import projImg6 from "../assets/img/Ecommerce.png";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.jpg";
import logo4 from "../assets/img/logo4.jpg";
import poster1 from "../assets/img/poster1.png";
import poster2 from "../assets/img/poster2.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

let view1 = "https://music-website-sounds.netlify.app/";
let view2 = "https://fastidious-narwhal-231d75.netlify.app/";
let view3 = "https://www.linkedin.com/in/deepakpanwar/";

export const Projects = () => {

  const projects = [
    {
      title: "FreelancePro Website",
      description: "For Freelancing",
      view: "https://freelencer-pro.vercel.app/",
      imgUrl: projImg5,
    },
    {
      title: "E Commerce Webiste",
      description: "Design & Development",
      view: "https://ecommmercewesite.netlify.app/",
      imgUrl: projImg6,
    },
    {
      title: "Game Website",
      description: "For Portfolio",
      view: view2,
      imgUrl: projImg2,
    },
    
    {
      title: "Logo Designs",
      description: "For Branding",
      view: "https://logoopage.netlify.app/",
      imgUrl: projImg3,
    },
    {
      title: "Login & SignUp Page",
      description: "New Design",
      view: "https://harmonious-malasada-ef62ee.netlify.app/",
      imgUrl: projImg4,
    },
    
    {
      title: "Music Website",
      description: "Design & Development",
      view: view1,
      imgUrl: projImg1,
    },
  ];
  const projects1 = [
    {
      title: "Name Logo",
      description: "For Portfolio",
      view: "https://logoopage.netlify.app/",
      imgUrl: logo1,
    },
    {
      title: "Name logo",
      description: "For Portfolio",
      view: "https://logoopage.netlify.app/",
      imgUrl: logo2,
    },
    {
      title: "Website logo",
      description: "Music Website",
      view: "https://logoopage.netlify.app/",
      imgUrl: logo3,
    },
    {
      title: "Website logo",
      description: "Game Website",
      view: "https://logoopage.netlify.app/",
      imgUrl: logo4,
    },
  ];
  const projects2 = [
    {
      title: "Poster",
      description: "Social Media",
      view: view3,
      imgUrl: poster1,
    },
    {
      title: "Poster",
      description: "Social Media",
      view: view3,
      imgUrl: poster2,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>I have completed a lot of projects based on my skills, some major projects are mention below.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row id="row">
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>I've designed several logos specifically for my website. Each one reflects a unique aspect of my brand and vision.</p>
                        <Row>
                          {
                            projects1.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>I've designed several poster specifically for Social Media.</p>
                        <Row>
                          {
                            projects2.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

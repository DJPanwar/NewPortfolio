import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/java.png";
import meter4 from "../assets/img/cpp.png";
import meter5 from "../assets/img/js.png";
import meter6 from "../assets/img/sql.png";
import meter7 from "../assets/img/Reactjs-removebg-preview.png"
import meter8 from "../assets/img/python-removebg-preview.png"
import meter9 from "../assets/img/nodejs-removebg-preview.png"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I have a strong interest in Data Structures and Algorithms,<br />
                with a solid understanding of core computer science subjects like Operating Systems, Databases,<br />
                Computer Networks, Object-Oriented Programming, and Machine Learning.<br /><br />

                I've earned certifications in C and C++ Programming, Web Development (HTML, CSS),<br />
                JavaScript, and Machine Learning. I'm also skilled in modern web technologies such as React, Node.js, and Python.<br /><br />

                On the design side, I work with tools like Figma and Adobe XD to create intuitive user experiences,<br />
                and use Tailwind CSS to build responsive, visually appealing interfaces.<br />
                I'm also familiar with Git and GitHub for version control and constantly strive to expand my skill set.
              </p>

              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter7} alt="SQL" />
                  <h5>React Js</h5>
                </div>
                <div className="item">
                  <img src={meter8} alt="SQL" />
                  <h5>Python</h5>
                </div>
                <div className="item">
                  <img src={meter9} alt="SQL" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="HTML" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="CSS" />
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Java" />
                  <h5>Java</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="C++" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="JavaScript" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="SQL" />
                  <h5>SQL</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Design" />
    </section>
  );
}

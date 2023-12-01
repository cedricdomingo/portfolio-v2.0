import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

import cplusplusIcon from "../assets/img/cplusplus-icon.png";
import cssIcon from "../assets/img/css-icon.png";
import gitIcon from "../assets/img/git-icon.png";
import htmlIcon from "../assets/img/html-icon.png";
import javascriptIcon from "../assets/img/javascript-icon.png";
import javaIcon from "../assets/img/java-icon.png";
import pythonIcon from "../assets/img/python-icon.png";
import reactIcon from "../assets/img/react-icon.png";
import sqlIcon from "../assets/img/sql-icon.png";
import tailwindcssIcon from "../assets/img/tailwindcss-icon.png";


export const Skills = () => {

  const icons = [
    reactIcon,
    htmlIcon,
    cssIcon,
    javascriptIcon,
    tailwindcssIcon,
    pythonIcon,
    cplusplusIcon,
    sqlIcon,
    gitIcon,
  ];

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
              <p>As a recent <b>Bachelor of Technology</b> graduate with a degree specialization in <b>Web and Mobile Application Development</b>, I've cultivated a robust skill set in designing and developing responsive web applications. Proficient in <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b> and <b>React</b>, I bring a solid foundation in front-end technologies.
                <br></br><br></br>
                Moreover, my interest in <b>Data Science</b> has led me to explore <b>Python</b> for data analysis, along with utilizing <b>Microsoft Excel</b> for data management and <b>Tableau</b> for visual data representation. I'm enthusiastic about leveraging these skills to create impactful digital solutions and contribute effectively to innovative projects.</p>

              {/* Add Tech Stack heading */}
              <h3 className="tech-stack-heading">Technologies & Tools</h3>

              <div className="icons-container">
                <div className="icon">
                  <img src={reactIcon} alt="React Icon" className="tech-icon" />
                  <span className="icon-label">React</span>
                </div>

                <div className="icon">
                  <img src={javascriptIcon} alt="JavaScript Icon" className="tech-icon" />
                  <span className="icon-label">JavaScript</span>
                </div>

                <div className="icon">
                  <img src={htmlIcon} alt="HTML Icon" className="tech-icon" />
                  <span className="icon-label">HTML</span>
                </div>

                <div className="icon">
                  <img src={cssIcon} alt="CSS Icon" className="tech-icon" />
                  <span className="icon-label">CSS</span>
                </div>

                <div className="icon">
                  <img src={tailwindcssIcon} alt="Tailwind CSS Icon" className="tech-icon" />
                  <span className="icon-label">Tailwind CSS</span>
                </div>

                <div className="icon">
                  <img src={javaIcon} alt="Java Icon" className="tech-icon" />
                  <span className="icon-label">Java</span>
                </div>

                <div className="icon">
                  <img src={cplusplusIcon} alt="C++ Icon" className="tech-icon" />
                  <span className="icon-label">C++</span>
                </div>

                <div className="icon">
                  <img src={pythonIcon} alt="Python Icon" className="tech-icon" />
                  <span className="icon-label">Python</span>
                </div>


                <div className="icon">
                  <img src={gitIcon} alt="Git Icon" className="tech-icon" />
                  <span className="icon-label">Git</span>
                </div>


                <div className="icon">
                  <img src={sqlIcon} alt="SQL Icon" className="tech-icon" />
                  <span className="icon-label">SQL</span>
                </div>

              </div>

              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Back-end Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>UI/UX Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Data Science</h5>
                </div>
              </Carousel> */}

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

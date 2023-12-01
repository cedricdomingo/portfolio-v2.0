import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Developer.", "Web Designer.", "Data Science Enthusiast."];
  const period = 2000;


  // Learn More button
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('aboutme');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };


  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  // Function to open the PDF in a new tab
  const openResumeInNewTab = () => {
    // Define the path to your PDF file in the public directory
    const pdfPath = '/resume/Allen Cedric Domingo - Resume - Nov 2023.pdf';

    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
  };

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Adjust timing intervals for typing and backspacing
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 1.5); // Slower backspacing
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period * 1.5); // Delay after completing typing
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500); // Initial delay before starting next typing cycle
    } else {
      setDelta(150); // Typing speed
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{`Hello, World! I'm `}
                    <br></br>
                    {`Allen Cedric Domingo.`}
                    <br></br>
                    {`I'm a`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Developer.", "Web Designer.", "Data Science Enthusiast." ]'><span className="wrap">{text}</span></span></h2>
                  <p>I'm a recent <b>Bachelor of Technology graduate</b> specializing in <b>Web and Mobile Application Development</b>, driven by a profound enthusiasm for coding, designing, and creating impactful digital solutions. With a passion for exploring the intricate world of data science, I'm on a mission to merge innovation and technology, translating ideas into functional and user-centric experiences.</p>
                  <div className="button-group">
                    <button onClick={openResumeInNewTab}>View Resume</button>
                    <button onClick={scrollToAboutMe}>Learn More <ArrowRightCircle size={25} /></button>
                  </div>
                </div>}
            </TrackVisibility>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import updatedCV from '../assets/pdf/Updated CV.pdf';
import htmlLogo from '../assets/images/html.png';
import cssLogo from '../assets/images/css.png';
import JavaScriptLogo from '../assets/images/js.png';
import reactLogo from '../assets/images/react.png';
import sassLogo from '../assets/images/sass.png';
import wpLogo from '../assets/images/wp.png';

const About = () => {
  const [text] = useTypewriter({
    words: [
      'UX/UI Designer',
      'Website Developer',
      'Website Designer',
      'Freelancer',
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div id="about">
      <section className="about-section">
        <div className="container">
          <div className="about-me">
            <h5>
              I'm Praveen Thakur and{' '}
              <span
                className="blood-red"
                style={{
                  margin: '10px',
                  fontFamily: 'Sofadi One',
                }}
              >
                {text}
              </span>
              <Cursor cursorColor="red" />
            </h5>
            <p>
              I am a dedicated and passionate Web Developer, committed to
              delivering high-quality and customized websites. Leveraging my
              full potential and effort, I ensure the creation of bespoke
              websites that align with your specific demands and ideas. My
              skills and imagination are applied efficiently to craft unique and
              successful web solutions.
            </p>
          </div>

          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4">
              <div className="row">
                <div className="col-6">
                  <div className="info-item padd-15">
                    <p>
                      Birthday : <span>13 oct 1996</span>
                    </p>
                  </div>

                  <div className="info-item padd-15">
                    <p>
                      Age : <span>25</span>
                    </p>
                  </div>

                  <div className="info-item padd-15">
                    <p>
                      Website :{' '}
                      <span>
                        <a href="#">praveen website</a>
                      </span>
                    </p>
                  </div>

                  <div className="info-item padd-15">
                    <p>
                      Email:{' '}
                      <span>
                        <a href="mailto: praveentha8@gmail.com">
                          {' '}
                          praveentha8@gmail.com
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="info-item padd-15">
                    <p>
                      Degree : <span>BBA</span>
                    </p>
                  </div>

                  <div className="info-item padd-15">
                    <p>
                      Phone : <span>8440844548</span>
                    </p>
                  </div>

                  <div className="info-item padd-15">
                    <p>
                      City : <span>Delhi</span>
                    </p>
                  </div>

                  <div className="info-item padd-15">
                    <p>
                      Freelance : <span>Available</span>
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="buttons padd-15">
                    <span>
                      <a
                        href={updatedCV}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        &lt;/ Download CV
                      </a>
                    </span>
                    <span style={{ margin: '20px' }}>
                      <a href="#contact"> &lt;/ Hire Me </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mt-4">
              <div className="workExperience">
                <h4>Work Experience</h4>
                <div className="epx">
                  <div className="dot"></div>
                  <div className="line"></div>
                  <ul className="experience">
                    <li>
                      <span className="blood-red"> The WebPlant </span>
                      <br />
                      <span>WEBSITE DEVELOPMENT ( FRONTEND DESIGNING)</span>
                      <br />
                      <span>2nd July-2020 to 30th Dec-2020</span>
                    </li>
                  </ul>
                </div>
                <div className="epx">
                  <div className="dot"></div>
                  <div className="line"></div>
                  <ul className="experience">
                    <li>
                      <span className="blood-red">FREIGHT LOGISTIC</span>
                      <br />
                      <span>WEBSITE DEVELOPMENT ( FRONTEND DESIGNING)</span>
                      <br />
                      <span>2nd Jan-2021 to 11th Sep-2022</span>
                    </li>
                  </ul>
                </div>
                <div className="epx">
                  <div className="dot"></div>
                  <div className="line"></div>
                  <ul className="experience">
                    <li>
                      <span className="blood-red">
                        ARCS TECHNOLOGIES PVT. LTD.
                      </span>
                      <br />
                      <span>WEBSITE DEVELOPMENT ( FRONTEND DESIGNING)</span>
                      <br />
                      <span>14th Sep-2022 to Till Now</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4">
            <div className="skill">
              <div className="skill-sec">
                <span className="logo">
                  <img src={htmlLogo} alt="HTML Logo" />
                </span>
                <span className="logo">
                  <img src={cssLogo} alt="CSS Logo" />
                </span>
                <span className="logo">
                  <img src={JavaScriptLogo} alt="JavaScript Logo" />
                </span>
                <span className="logo">
                  <img src={reactLogo} alt="React Logo" />
                </span>
                <span className="logo">
                  <img src={sassLogo} alt="Sass Logo" />
                </span>
                <span className="logo">
                  <img src={wpLogo} alt="WordPress Logo" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

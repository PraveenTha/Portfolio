import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import updatedCV from '../assets/pdf/Updated CV.pdf';
import htmlLogo from '../assets/images/html.png';
import cssLogo from '../assets/images/css.png';
import JavaScriptLogo from '../assets/images/js.png';
import reactLogo from '../assets/images/react.png';
import sassLogo from '../assets/images/sass.png';
import wpLogo from '../assets/images/wp.png';
import figmaLogo from '../assets/images/figma.png';

const About = () => {
  const [text] = useTypewriter({
    words: [
      'UX/UI Designer',
      'Website Developer',
      'Website Designer',
      'Freelancer',
    ],
    loop: true,
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
                style={{ margin: '10px', fontFamily: 'Sofadi One' }}
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
              <br />
              <br />
              With a solid foundation in front-end technologies and an eye for
              design, I specialize in creating responsive, user-centric websites
              that not only look great but also function seamlessly across all
              devices. Whether it’s building static websites, dynamic platforms,
              or e-commerce solutions, I deliver results that align perfectly
              with business objectives. By staying updated with the latest
              trends, I ensure every project reflects modern standards and
              delivers an engaging user experience.
            </p>
          </div>

          {/* Work Experience & Skills */}
          <div className="row mt-4">
            {/* Work Experience */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="workExperience">
                <h4>Work Experience</h4>
                <div className="row">
                  <div className="col-6">
                    <div className="epx">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <ul className="experience">
                        <li>
                          <span className="blood-red">The WebPlant</span>
                          <br />
                          <span>Website Development (Frontend Designing)</span>
                          <br />
                          <span>2nd July 2020 – 30th Dec 2020</span>
                        </li>
                      </ul>
                    </div>
                    <div className="epx">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <ul className="experience">
                        <li>
                          <span className="blood-red">Freight Logistic</span>
                          <br />
                          <span>Website Development (Frontend Designing)</span>
                          <br />
                          <span>2nd Jan 2021 – 11th Sep 2022</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="epx">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <ul className="experience">
                        <li>
                          <span className="blood-red">
                            ARCS Technologies Pvt. Ltd.
                          </span>
                          <br />
                          <span>Website Development (Frontend Designing)</span>
                          <br />
                          <span>14th Sep 2022 – 21st Dec 2024</span>
                        </li>
                      </ul>
                    </div>
                    <div className="epx">
                      <div className="dot"></div>
                      <div className="line"></div>
                      <ul className="experience">
                        <li>
                          <span className="blood-red">GTF Technologies</span>
                          <br />
                          <span>Website Development (Frontend Designing)</span>
                          <br />
                          <span>21st Feb 2025 – Present</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="skill">
                <h4>Skills</h4>
                <div className="skill-sec">
                  {[
                    htmlLogo,
                    cssLogo,
                    JavaScriptLogo,
                    reactLogo,
                    sassLogo,
                    wpLogo,
                    figmaLogo,
                  ].map((logo, idx) => (
                    <span className="logo" key={idx}>
                      <img src={logo} alt="Skill Logo" />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Download CV Button (Optional) */}
          {/* <div className="mt-4 text-center">
            <a
              href={updatedCV}
              download="Praveen_Thakur_CV"
              className="btn btn-primary"
            >
              Download CV
            </a>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default About;

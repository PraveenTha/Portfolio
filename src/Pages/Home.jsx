import React from 'react';
import '../assets/css/main-style.css';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import mouseImage from '../assets/images/mouse.png';

const Home = () => {
  const [text] = useTypewriter({
    words: ['UX/UI', 'Website', 'Webapp'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div id="home">
      <section className="home-section">
        <div className="container">
          <div className="banner-contant">
            <div className="dot"></div>
            <div className="timeline">
              {/* Using a standard anchor tag to link to the Portfolio section */}
              <a href="#portfolio">
                <img src={mouseImage} alt="Visit Portfolio" />
              </a>
            </div>
            <div className="timeline2"></div>
            <div className="ban-containt">
              <h2>
                Hi, my name is <span className="pre-dark">Praveen Thakur</span>
              </h2>
              <h2>
                I design and develop
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
              </h2>
              <span
                className="blood-red"
                style={{
                  fontSize: '30px',
                  fontFamily: 'Sofadi One',
                }}
              >
                Let me show You...
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

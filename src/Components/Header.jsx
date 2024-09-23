import React, { useState, useEffect } from 'react'; // Ensure useState and useEffect are imported
import '../assets/css/Nav.css'; // Assuming your styles are here

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Toggle dark/light mode
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
  }, [isDarkMode]);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
      setNavOpen(false); // Close the nav after clicking
    }
  };

  return (
    <div className="nav">
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
            <a href="#home" onClick={() => handleScrollTo('home')}>
              Praveen
            </a>
          </div>
          <div className="menu-toggle" onClick={() => setNavOpen(!navOpen)}>
            <div className={navOpen ? 'hamBox hamBoxOpen' : 'hamBox'}>
              <span className={navOpen ? 'lineTop spin' : 'lineTop'}></span>
              <span
                className={navOpen ? 'lineBottom spin' : 'lineBottom'}
              ></span>
            </div>
          </div>

          <div className="dark-mode-toggle">
            <button onClick={handleDarkModeToggle} className="mode-btn">
              {isDarkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
            </button>
          </div>
        </div>

        <div className="nav-overlay" style={{ top: navOpen ? '0' : '-100%' }}>
          <ul className="nav-links">
            <li className="nav-item">
              <a href="#home" onClick={() => handleScrollTo('home')}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" onClick={() => handleScrollTo('about')}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" onClick={() => handleScrollTo('portfolio')}>
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" onClick={() => handleScrollTo('contact')}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-footer">
            <div
              className="location"
              style={{
                bottom: navOpen ? '0' : '-20px',
                opacity: navOpen ? '1' : '0',
                transitionDelay: navOpen ? '0.8s' : '0',
              }}
            >
              <span>Praveen Thakur</span>
            </div>
            <div className="nav-social-media">
              <ul>
                <li>
                  <a
                    href="https://github.com/PraveenTha"
                    target="_blank"
                    style={{
                      bottom: navOpen ? '0' : '-20px',
                      opacity: navOpen ? '1' : '0',
                      transitionDelay: navOpen ? '0.9s' : '0',
                    }}
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/praveen-thakur-285a88185/"
                    target="_blank"
                    style={{
                      bottom: navOpen ? '0' : '-20px',
                      opacity: navOpen ? '1' : '0',
                      transitionDelay: navOpen ? '1s' : '0',
                    }}
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

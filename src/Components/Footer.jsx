import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div id="footer">
      <footer className="footer-section">
        <div className="container">
          <div className="footer-logo">
            <h1>PRAVEEN</h1>
          </div>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
            <a
              href="https://github.com/PraveenTha"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
          </div>
          <div className="footer-copyright">
            <p>
              &copy; {new Date().getFullYear()} Praveen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

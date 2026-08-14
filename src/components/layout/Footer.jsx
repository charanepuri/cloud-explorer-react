import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaPython,
} from "react-icons/fa";
import { SiDjango, SiAngular } from "react-icons/si";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        {/* Top */}

        <div className="footer-top">
          <h2>Cloud Explorer</h2>
          <p>Learn, Compare & Master Cloud Service Models</p>
        </div>

        {/* Middle */}

        <div className="footer-content">

          {/* Left */}

          <div className="footer-column">
            <h3>About</h3>

            <p>© 2026 Built by Epuri Charan Teja</p>

            <p className="tech-stack">
              Developed using
            </p>

            <ul>
              <li>React</li>
              <li>React Router</li>
              <li>CSS3</li>
              <li>React Icons</li>
              <li>Vite</li>
            </ul>
          </div>

          {/* Center */}

          <div className="footer-column">
            <h3>Project</h3>

            <a
              href="https://github.com/charanepuri/cloud-explorer-react"
              target="_blank"
              rel="noreferrer"
            >
              GitHub Repository
            </a>

            <a href="Cloud_Explorer_Project_Documentation.pdf" target="_blank" rel="noreferrer">
              Documentation
            </a>
          </div>

          {/* Right */}

          <div className="footer-column">
            <h3>Connect</h3>

            <a
              href="https://github.com/charanepuri"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/charan-teja-972aa9231"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              LinkedIn
            </a>
          </div>

          {/* Portfolios */}

          <div className="footer-column">
            <h3>Explore Portfolios</h3>

            <a
              href="https://portfolio-site-django.onrender.com"
              target="_blank"
              rel="noreferrer"
            >
              <SiDjango />
              Django
            </a>

            <a
              href="https://charan-react-portfolio.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <FaReact />
              React
            </a>

            <a
              href="https://flask-developer-dashboard-portfolio.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaPython />
              Flask
            </a>

            <a
              href="https://angular-portfolio-sigma-eight.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              <SiAngular />
              Angular
            </a>
          </div>

        </div>

        {/* Bottom */}

        <div className="footer-bottom">
          <p>
            Made with 💕 by <strong>Epuri Charan Teja</strong>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
import { HiOutlineCodeBracket } from "react-icons/hi2";

import Button from "../common/Button";

import "./DeveloperSection.css";

function DeveloperSection() {
  return (
    <section className="developer-section">

      <div className="container">

        <div className="developer-card">

          <div className="developer-icon">
            <HiOutlineCodeBracket />
          </div>

          <span>About the Developer</span>

          <h2>
            Epuri Charan Teja
          </h2>

          <p>
            Aspiring Full Stack Developer passionate about
            building practical web applications and learning
            modern technologies through real-world projects.
          </p>

          <a
            href="https://github.com/charanepuri"
            target="_blank"
            rel="noreferrer"
          >
            <Button>
              View GitHub
            </Button>
          </a>

        </div>

      </div>

    </section>
  );
}

export default DeveloperSection;
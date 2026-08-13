import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

import { paasData } from "../../data/cloudData";

import "./PAASHero.css";

function PAASHero() {
  return (
    <section className="paas-hero">
      <div className="container paas-hero-container">

        <div className="paas-hero-content">
          <span className="paas-label">
            Platform as a Service
          </span>

          <h1>
            Build Applications
            <span> Without Managing Infrastructure</span>
          </h1>

          <p>
            {paasData.description}
          </p>
        </div>

        <div className="paas-hero-icon">
          <HiOutlineWrenchScrewdriver />
        </div>

      </div>
    </section>
  );
}

export default PAASHero;
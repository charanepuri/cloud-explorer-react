import { HiOutlineComputerDesktop } from "react-icons/hi2";

import { saasData } from "../../data/cloudData";

import "./SAASHero.css";

function SAASHero() {
  return (
    <section className="saas-hero">
      <div className="container saas-hero-container">

        <div className="saas-hero-content">

          <span className="saas-label">
            Software as a Service
          </span>

          <h1>
            Use Software
            <span> Without Managing It</span>
          </h1>

          <p>
            {saasData.description}
          </p>

        </div>

        <div className="saas-hero-icon">
          <HiOutlineComputerDesktop />
        </div>

      </div>
    </section>
  );
}

export default SAASHero;
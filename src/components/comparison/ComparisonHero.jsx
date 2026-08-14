import {
  HiOutlineScale,
  HiOutlineArrowsRightLeft,
} from "react-icons/hi2";

import "./ComparisonHero.css";

function ComparisonHero() {
  return (
    <section className="comparison-hero">
      <div className="container comparison-hero-container">

        <div className="comparison-hero-content">

          <span className="comparison-label">
            Cloud Service Models
          </span>

          <h1>
            Compare
            <span> IaaS, PaaS & SaaS</span>
          </h1>

          <p>
            See the key differences between the three major
            cloud service models and understand who manages
            each layer.
          </p>

        </div>

        <div className="comparison-hero-icon">
          <HiOutlineScale />
        </div>

      </div>
    </section>
  );
}

export default ComparisonHero;
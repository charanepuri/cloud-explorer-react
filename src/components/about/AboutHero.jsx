import { HiOutlineCloud } from "react-icons/hi2";

import "./AboutHero.css";

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="container about-hero-container">

        <div className="about-hero-content">

          <span className="about-label">
            About Cloud Explorer
          </span>

          <h1>
            Learn Cloud Computing
            <span> The Simple Way</span>
          </h1>

          <p>
            Cloud Explorer is an interactive educational platform
            designed to make cloud service models easier to
            understand through simple explanations, comparisons,
            real-world examples, and interactive learning.
          </p>

        </div>

        <div className="about-hero-icon">
          <HiOutlineCloud />
        </div>

      </div>
    </section>
  );
}

export default AboutHero;
import { HiOutlineLightBulb } from "react-icons/hi2";

import "./AnalogyHero.css";

function AnalogyHero() {
  return (
    <section className="analogy-hero">
      <div className="container analogy-hero-container">

        <div className="analogy-hero-content">

          <span className="analogy-label">
            Learn Through Analogy
          </span>

          <h1>
            Cloud Models
            <span> Made Simple</span>
          </h1>

          <p>
            Think about IaaS, PaaS, and SaaS like different
            ways of renting a place to live. The more the
            provider manages, the less you need to manage.
          </p>

        </div>

        <div className="analogy-hero-icon">
          <HiOutlineLightBulb />
        </div>

      </div>
    </section>
  );
}

export default AnalogyHero;
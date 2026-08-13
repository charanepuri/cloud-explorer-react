import { HiOutlineServerStack } from "react-icons/hi2";

import { iaasData } from "../../data/cloudData";
import "./IaaSHero.css";

function IaaSHero() {
  return (
    <section className="iaas-hero">
      <div className="container iaas-hero-container">

        <div className="iaas-hero-content">

          <span className="iaas-label">
            Infrastructure as a Service
          </span>

          <h1>
            Build Your Infrastructure
            <span> in the Cloud</span>
          </h1>

          <p>
            {iaasData.description}
          </p>

        </div>

        <div className="iaas-hero-icon">
          <HiOutlineServerStack />
        </div>

      </div>
    </section>
  );
}

export default IaaSHero;
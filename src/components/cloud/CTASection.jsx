import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi2";

import Button from "../common/Button";

import "./CTASection.css";

function CTASection() {
  return (
    <section className="cta-section">
      <div className="container">

        <div className="cta-content">

          <h2>
            Ready to Understand the Cloud?
          </h2>

          <p>
            Explore IaaS, PaaS, and SaaS in detail and
            discover how each cloud service model works.
          </p>

          <Link to="/comparison">
            <Button>
              Start Exploring
              <HiOutlineArrowRight />
            </Button>
          </Link>

        </div>

      </div>
    </section>
  );
}

export default CTASection;
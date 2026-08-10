import { Link } from "react-router-dom";
import {
  HiOutlineCloud,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import Button from "../common/Button";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">

        {/* Hero Content */}

        <div className="hero-content">

          <div className="hero-badge">
            <HiOutlineCloud />
            <span>Cloud Computing Made Simple</span>
          </div>

          <h1>
            Understand
            <span> IaaS, PaaS & SaaS </span>
            The Easy Way
          </h1>

          <p>
            Explore the world of cloud computing and understand
            Infrastructure as a Service, Platform as a Service,
            and Software as a Service through simple explanations,
            real-world examples, and interactive learning.
          </p>

          <div className="hero-actions">

            <Link to="/iaas">
              <Button>
                Start Learning
                <HiOutlineArrowRight />
              </Button>
            </Link>

            <Link to="/comparison">
              <Button variant="secondary">
                Compare Services
              </Button>
            </Link>

          </div>

        </div>

        {/* Hero Illustration */}

        <div className="hero-visual">

          <div className="cloud-illustration">

            <div className="cloud-main">
              <HiOutlineCloud />
            </div>

            <div className="cloud-orbit orbit-one">
              <span>☁</span>
            </div>

            <div className="cloud-orbit orbit-two">
              <span>⚙</span>
            </div>

            <div className="cloud-orbit orbit-three">
              <span>⚡</span>
            </div>

            <div className="cloud-server server-one">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="cloud-server server-two">
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
import { HiOutlineArrowRight } from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";

import "./AnalogySummary.css";

function AnalogySummary() {
  return (
    <section className="analogy-summary">

      <div className="container">

        <SectionTitle
          title="Remember It This Way"
          subtitle="As you move from IaaS to SaaS, the cloud provider takes over more responsibility."
        />

        <div className="analogy-flow">

          <div className="flow-item iaas">
            <strong>IaaS</strong>
            <span>More Control</span>
          </div>

          <HiOutlineArrowRight />

          <div className="flow-item paas">
            <strong>PaaS</strong>
            <span>Balanced Control</span>
          </div>

          <HiOutlineArrowRight />

          <div className="flow-item saas">
            <strong>SaaS</strong>
            <span>Less Management</span>
          </div>

        </div>

        <div className="responsibility-bar">

          <span>You Manage More</span>

          <div className="responsibility-line">
            <div />
          </div>

          <span>Provider Manages More</span>

        </div>

      </div>

    </section>
  );
}

export default AnalogySummary;
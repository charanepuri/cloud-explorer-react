import { HiOutlineCheckCircle } from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";

import { iaasData } from "../../data/cloudData";

import "./BestForSection.css";

function BestForSection() {
  return (
    <section className="best-for-section">
      <div className="container">

        <SectionTitle
          title="IaaS Is Best For"
          subtitle="IaaS is a good choice when you need flexibility and control over your computing infrastructure."
        />

        <div className="best-for-list">

          {iaasData.bestFor.map((item) => (
            <div className="best-for-item" key={item}>

              <HiOutlineCheckCircle />

              <span>{item}</span>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default BestForSection;
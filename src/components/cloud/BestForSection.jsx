import { HiOutlineCheckCircle } from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";

import "./BestForSection.css";

function BestForSection({
  data,
  accent = "iaas",
}) {
  return (
    <section className={`best-for-section ${accent}`}>
      <div className="container">

        <SectionTitle
          title={`${data.shortName} Is Best For`}
          subtitle={`Discover situations where ${data.shortName} can be the right cloud service model.`}
        />

        <div className="best-for-list">

          {data.bestFor.map((item) => (
            <div
              className="best-for-item"
              key={item}
            >
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
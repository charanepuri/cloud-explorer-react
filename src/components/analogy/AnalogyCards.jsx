import {
  HiOutlineBuildingOffice2,
  HiOutlineHomeModern,
  HiOutlineBuildingStorefront,
} from "react-icons/hi2";

import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

import { analogyData } from "../../data/cloudData";

import "./AnalogyCards.css";

const icons = {
  iaas: <HiOutlineBuildingOffice2 />,
  paas: <HiOutlineHomeModern />,
  saas: <HiOutlineBuildingStorefront />,
};

function AnalogyCards() {
  return (
    <section className="analogy-cards-section">
      <div className="container">

        <SectionTitle
          title="The Apartment Analogy"
          subtitle="Imagine cloud service models as different ways of renting a place to live."
        />

        <div className="analogy-grid">

          {analogyData.map((item) => (
            <Card
              key={item.id}
              className={`analogy-card ${item.color}`}
            >

              <div className="analogy-card-visual">

                <div className="analogy-icon">
                  {icons[item.id]}
                </div>

              </div>

              <span className="analogy-model">
                {item.model}
              </span>

              <h3>{item.title}</h3>

              <p className="analogy-description">
                {item.description}
              </p>

              <div className="analogy-divider" />

              <p className="cloud-description">
                <strong>In the cloud:</strong>{" "}
                {item.cloudDescription}
              </p>

              <ul>
                {item.points.map((point) => (
                  <li key={point}>
                    <span>✓</span>
                    {point}
                  </li>
                ))}
              </ul>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}

export default AnalogyCards;
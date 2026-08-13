import {
  HiOutlineServerStack,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import { iaasData } from "../../data/cloudData";

import "./ExamplesSection.css";

function ExamplesSection() {
  return (
    <section className="examples-section">
      <div className="container">

        <SectionTitle
          title="Popular IaaS Examples"
          subtitle="These cloud platforms provide virtualized infrastructure that you can configure and manage according to your requirements."
        />

        <div className="examples-grid">

          {iaasData.examples.map((example) => (
            <Card key={example.name} className="example-card">

              <div className="example-icon">
                <HiOutlineServerStack />
              </div>

              <div className="example-content">

                <span>{example.provider}</span>

                <h3>{example.name}</h3>

                <p>{example.description}</p>

                <button className="example-link">
                  Learn More
                  <HiOutlineArrowTopRightOnSquare />
                </button>

              </div>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ExamplesSection;
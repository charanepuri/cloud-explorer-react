import {
  HiOutlineServerStack,
  HiOutlineArrowTopRightOnSquare,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import "./ExamplesSection.css";

function ExamplesSection({
  data,
  accent = "iaas",
}) {
  return (
    <section className={`examples-section ${accent}`}>
      <div className="container">

        <SectionTitle
          title={`Popular ${data.shortName} Examples`}
          subtitle={`Explore popular platforms and services built around ${data.title}.`}
        />

        <div className="examples-grid">

          {data.examples.map((example) => (
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
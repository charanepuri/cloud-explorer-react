import {
  FaReact,
  FaCss3Alt,
  FaGithub,
} from "react-icons/fa";

import {
  SiVite,
  SiReactrouter,
} from "react-icons/si";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import "./TechnologiesSection.css";

const technologies = [
  {
    id: 1,
    icon: <FaReact />,
    name: "React",
  },
  {
    id: 2,
    icon: <SiVite />,
    name: "Vite",
  },
  {
    id: 3,
    icon: <SiReactrouter />,
    name: "React Router",
  },
  {
    id: 4,
    icon: <FaCss3Alt />,
    name: "CSS3",
  },
  {
    id: 5,
    icon: <FaGithub />,
    name: "GitHub",
  },
];

function TechnologiesSection() {
  return (
    <section className="technologies-section">

      <div className="container">

        <SectionTitle
          title="Technologies Used"
          subtitle="Cloud Explorer is built using modern frontend technologies and development tools."
        />

        <div className="technologies-grid">

          {technologies.map((technology) => (
            <Card
              key={technology.id}
              className="technology-card"
            >
              <div className="technology-icon">
                {technology.icon}
              </div>

              <h3>{technology.name}</h3>
            </Card>
          ))}

        </div>

      </div>

    </section>
  );
}

export default TechnologiesSection;
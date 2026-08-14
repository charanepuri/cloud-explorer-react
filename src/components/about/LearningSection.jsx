import {
  HiOutlineBookOpen,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";

import "./LearningSection.css";

const learningItems = [
  {
    id: 1,
    icon: <HiOutlineBookOpen />,
    title: "Understand",
    description:
      "Learn what IaaS, PaaS, and SaaS mean and how each model works.",
  },
  {
    id: 2,
    icon: <HiOutlineLightBulb />,
    title: "Simplify",
    description:
      "Use real-world analogies and practical examples to make complex concepts easier to remember.",
  },
  {
    id: 3,
    icon: <HiOutlineRocketLaunch />,
    title: "Apply",
    description:
      "Use your knowledge to identify and choose the right cloud service model for different situations.",
  },
];

function LearningSection() {
  return (
    <section className="learning-section">

      <div className="container">

        <SectionTitle
          title="Our Mission"
          subtitle="Make cloud computing easier to understand for students, beginners, and aspiring developers."
        />

        <div className="learning-grid">

          {learningItems.map((item) => (
            <div
              className="learning-item"
              key={item.id}
            >
              <div className="learning-icon">
                {item.icon}
              </div>

              <div>
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default LearningSection;
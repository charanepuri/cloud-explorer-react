import {
  HiOutlineAcademicCap,
  HiOutlineChartBar,
  HiOutlineCloud,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import "./ProjectOverview.css";

const overviewItems = [
  {
    id: 1,
    icon: <HiOutlineCloud />,
    title: "Cloud Fundamentals",
    description:
      "Understand the fundamentals of cloud computing and how cloud resources are delivered.",
  },
  {
    id: 2,
    icon: <HiOutlineChartBar />,
    title: "Compare Service Models",
    description:
      "Clearly understand the differences between IaaS, PaaS, and SaaS.",
  },
  {
    id: 3,
    icon: <HiOutlineAcademicCap />,
    title: "Learn Interactively",
    description:
      "Reinforce your knowledge through analogies, examples, and interactive quizzes.",
  },
];

function ProjectOverview() {
  return (
    <section className="project-overview">
      <div className="container">

        <SectionTitle
          title="Project Overview"
          subtitle="Cloud Explorer brings the core concepts of cloud service models together in one simple learning experience."
        />

        <div className="overview-grid">

          {overviewItems.map((item) => (
            <Card
              key={item.id}
              className="overview-card"
            >
              <div className="overview-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProjectOverview;
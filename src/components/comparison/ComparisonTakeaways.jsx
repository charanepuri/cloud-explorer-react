import {
  HiOutlineServerStack,
  HiOutlineCodeBracket,
  HiOutlineComputerDesktop,
} from "react-icons/hi2";

import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

import "./ComparisonTakeaways.css";

const takeaways = [
  {
    id: "iaas",
    icon: <HiOutlineServerStack />,
    title: "IaaS",
    subtitle: "Maximum Control",
    description:
      "Choose IaaS when you need control over operating systems, applications, and infrastructure configuration.",
  },
  {
    id: "paas",
    icon: <HiOutlineCodeBracket />,
    title: "PaaS",
    subtitle: "Focus on Development",
    description:
      "Choose PaaS when you want to build and deploy applications without worrying about the underlying infrastructure.",
  },
  {
    id: "saas",
    icon: <HiOutlineComputerDesktop />,
    title: "SaaS",
    subtitle: "Ready to Use",
    description:
      "Choose SaaS when you simply need a complete application that is ready to use through the internet.",
  },
];

function ComparisonTakeaways() {
  return (
    <section className="comparison-takeaways">
      <div className="container">

        <SectionTitle
          title="Which Model Should You Choose?"
          subtitle="The right model depends on how much control you need and how much infrastructure you want to manage."
        />

        <div className="takeaways-grid">

          {takeaways.map((item) => (
            <Card
              key={item.id}
              className={`takeaway-card ${item.id}`}
            >

              <div className="takeaway-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <strong>{item.subtitle}</strong>

              <p>{item.description}</p>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ComparisonTakeaways;
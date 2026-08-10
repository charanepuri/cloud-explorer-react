import { Link } from "react-router-dom";
import {
  HiOutlineServerStack,
  HiOutlineWrenchScrewdriver,
  HiOutlineComputerDesktop,
  HiOutlineArrowRight,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import "./ServiceModels.css";

const serviceModels = [
  {
    id: "iaas",
    icon: <HiOutlineServerStack />,
    title: "IaaS",
    fullName: "Infrastructure as a Service",
    description:
      "Rent virtualized computing resources such as servers, storage, and networking infrastructure from a cloud provider.",
    color: "iaas",
  },
  {
    id: "paas",
    icon: <HiOutlineWrenchScrewdriver />,
    title: "PaaS",
    fullName: "Platform as a Service",
    description:
      "A managed platform that provides the tools and environment developers need to build, deploy, and manage applications.",
    color: "paas",
  },
  {
    id: "saas",
    icon: <HiOutlineComputerDesktop />,
    title: "SaaS",
    fullName: "Software as a Service",
    description:
      "Ready-to-use software applications delivered over the internet without requiring users to manage the underlying infrastructure.",
    color: "saas",
  },
];

function ServiceModels() {
  return (
    <section className="service-models">
      <div className="container">

        <SectionTitle
          title="Explore Cloud Service Models"
          subtitle="Understand how IaaS, PaaS, and SaaS differ and discover which model is right for different use cases."
        />

        <div className="service-model-grid">

          {serviceModels.map((service) => (
            <Card
              key={service.id}
              className={`service-card ${service.color}`}
            >

              <div className="service-icon">
                {service.icon}
              </div>

              <span className="service-short-name">
                {service.title}
              </span>

              <h3>{service.fullName}</h3>

              <p>{service.description}</p>

              <Link
                to={`/${service.id}`}
                className="service-link"
              >
                Learn More
                <HiOutlineArrowRight />
              </Link>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ServiceModels;
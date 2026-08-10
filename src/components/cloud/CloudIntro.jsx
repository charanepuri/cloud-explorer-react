import {
  HiOutlineArrowsPointingOut,
  HiOutlineBanknotes,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import "./CloudIntro.css";

const benefits = [
  {
    id: 1,
    icon: <HiOutlineArrowsPointingOut />,
    title: "Scalable",
    description:
      "Easily scale computing resources up or down based on your needs.",
  },
  {
    id: 2,
    icon: <HiOutlineBanknotes />,
    title: "Cost Effective",
    description:
      "Pay for the resources you use without investing heavily in physical infrastructure.",
  },
  {
    id: 3,
    icon: <HiOutlineShieldCheck />,
    title: "Reliable",
    description:
      "Cloud platforms provide reliable infrastructure with built-in availability and security.",
  },
  {
    id: 4,
    icon: <HiOutlineGlobeAlt />,
    title: "Global",
    description:
      "Access applications, services, and resources from almost anywhere in the world.",
  },
];

function CloudIntro() {
  return (
    <section className="cloud-intro">
      <div className="container">

        <SectionTitle
          title="What is Cloud Computing?"
          subtitle="Cloud computing allows you to access computing resources such as servers, storage, databases, and applications over the internet instead of managing physical infrastructure yourself."
        />

        <div className="cloud-benefits">

          {benefits.map((benefit) => (
            <Card key={benefit.id} className="benefit-card">

              <div className="benefit-icon">
                {benefit.icon}
              </div>

              <h3>{benefit.title}</h3>

              <p>{benefit.description}</p>

            </Card>
          ))}

        </div>

      </div>
    </section>
  );
}

export default CloudIntro;
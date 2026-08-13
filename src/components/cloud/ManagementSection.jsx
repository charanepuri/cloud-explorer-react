import {
  HiOutlineUser,
  HiOutlineCloud,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import "./ManagementSection.css";

function ManagementSection({
  data,
  accent = "iaas",
}) {
  return (
    <section className={`management-section ${accent}`}>
      <div className="container">

        <SectionTitle
          title="Who Manages What?"
          subtitle="See how responsibilities are divided between you and the cloud provider."
        />

        <div className="management-grid">

          <Card className="management-card user-management">

            <div className="management-header">
              <HiOutlineUser />
              <h3>You Manage</h3>
            </div>

            <ul>
              {data.managedByYou.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </Card>

          <Card className="management-card provider-management">

            <div className="management-header">
              <HiOutlineCloud />
              <h3>Cloud Provider Manages</h3>
            </div>

            <ul>
              {data.managedByProvider.map((item) => (
                <li key={item}>
                  <span>✓</span>
                  {item}
                </li>
              ))}
            </ul>

          </Card>

        </div>

      </div>
    </section>
  );
}

export default ManagementSection;
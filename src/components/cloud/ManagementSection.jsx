import {
  HiOutlineUser,
  HiOutlineCloud,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";
import Card from "../common/Card";

import { iaasData } from "../../data/cloudData";

import "./ManagementSection.css";

function ManagementSection() {
  return (
    <section className="management-section">
      <div className="container">

        <SectionTitle
          title="Who Manages What?"
          subtitle="With IaaS, you get more control over the infrastructure while the cloud provider manages the physical foundation."
        />

        <div className="management-grid">

          <Card className="management-card user-management">

            <div className="management-header">
              <HiOutlineUser />
              <h3>You Manage</h3>
            </div>

            <ul>
              {iaasData.managedByYou.map((item) => (
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
              {iaasData.managedByProvider.map((item) => (
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
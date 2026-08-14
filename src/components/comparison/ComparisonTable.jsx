import {
  HiOutlineCheckCircle,
} from "react-icons/hi2";

import SectionTitle from "../common/SectionTitle";

import { comparisonData } from "../../data/cloudData";

import "./ComparisonTable.css";

function renderValue(value) {
  if (value === "Provider") {
    return (
      <span className="comparison-value provider">
        <HiOutlineCheckCircle />
        Provider
      </span>
    );
  }

  if (value === "You Manage") {
    return (
      <span className="comparison-value user">
        You Manage
      </span>
    );
  }

  return value;
}

function ComparisonTable() {
  return (
    <section className="comparison-table-section">
      <div className="container">

        <SectionTitle
          title="Compare All Models"
          subtitle="See the key differences between IaaS, PaaS, and SaaS side by side."
        />

        <div className="comparison-table-wrapper">

          <table className="comparison-table">

            <thead>
              <tr>
                <th>Feature</th>
                <th className="iaas-column">IaaS</th>
                <th className="paas-column">PaaS</th>
                <th className="saas-column">SaaS</th>
              </tr>
            </thead>

            <tbody>

              {comparisonData.map((row) => (
                <tr key={row.feature}>

                  <th>{row.feature}</th>

                  <td className="iaas-column">
                    {renderValue(row.iaas)}
                  </td>

                  <td className="paas-column">
                    {renderValue(row.paas)}
                  </td>

                  <td className="saas-column">
                    {renderValue(row.saas)}
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}

export default ComparisonTable;
import IaaSHero from "../components/cloud/IaaSHero";
import ManagementSection from "../components/cloud/ManagementSection";
import ExamplesSection from "../components/cloud/ExamplesSection";
import BestForSection from "../components/cloud/BestForSection";

import { iaasData } from "../data/cloudData";

function IaaS() {
  return (
    <main>
      <IaaSHero />

      <ManagementSection
        data={iaasData}
        accent="iaas"
      />

      <ExamplesSection
        data={iaasData}
        accent="iaas"
      />

      <BestForSection
        data={iaasData}
        accent="iaas"
      />
    </main>
  );
}

export default IaaS;
import PAASHero from "../components/cloud/PAASHero";
import ManagementSection from "../components/cloud/ManagementSection";
import ExamplesSection from "../components/cloud/ExamplesSection";
import BestForSection from "../components/cloud/BestForSection";

import { paasData } from "../data/cloudData";

function PaaS() {
  return (
    <main>
      <PAASHero />

      <ManagementSection
        data={paasData}
        accent="paas"
      />

      <ExamplesSection
        data={paasData}
        accent="paas"
      />

      <BestForSection
        data={paasData}
        accent="paas"
      />
    </main>
  );
}

export default PaaS;
import SAASHero from "../components/cloud/SAASHero";
import ManagementSection from "../components/cloud/ManagementSection";
import ExamplesSection from "../components/cloud/ExamplesSection";
import BestForSection from "../components/cloud/BestForSection";

import { saasData } from "../data/cloudData";

function SaaS() {
  return (
    <main>
      <SAASHero />

      <ManagementSection
        data={saasData}
        accent="saas"
      />

      <ExamplesSection
        data={saasData}
        accent="saas"
      />

      <BestForSection
        data={saasData}
        accent="saas"
      />
    </main>
  );
}

export default SaaS;
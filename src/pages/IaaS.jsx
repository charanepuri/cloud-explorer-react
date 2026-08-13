import IaaSHero from "../components/cloud/IaaSHero";
import ManagementSection from "../components/cloud/ManagementSection";
import ExamplesSection from "../components/cloud/ExamplesSection";
import BestForSection from "../components/cloud/BestForSection";

function IaaS() {
  return (
    <main>
      <IaaSHero />

      <ManagementSection />

      <ExamplesSection />

      <BestForSection />
    </main>
  );
}

export default IaaS;
import Hero from "../components/hero/Hero";
import CloudIntro from "../components/cloud/CloudIntro";
import ServiceModels from "../components/cloud/ServiceModels";
import CTASection from "../components/cloud/CTASection";

function Home() {
  return (
    <main>
      <Hero />

      <CloudIntro />

      <ServiceModels />

      <CTASection />
    </main>
  );
}

export default Home;
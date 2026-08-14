import AboutHero from "../components/about/AboutHero";
import ProjectOverview from "../components/about/ProjectOverview";
import LearningSection from "../components/about/LearningSection";
import TechnologiesSection from "../components/about/TechnologiesSection";
import DeveloperSection from "../components/about/DeveloperSection";

function About() {
  return (
    <main>
      <AboutHero />

      <ProjectOverview />

      <LearningSection />

      <TechnologiesSection />

      <DeveloperSection />
    </main>
  );
}

export default About;
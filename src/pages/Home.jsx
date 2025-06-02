import HeroSection from "../components/common/HeroSection";
import ProjectsSection from "../components/common/ProjectsSection";
import TechStack from "../components/common/TechStack";
import Connect from "../components/common/Connect";

const Home = () => {
  return (
    <div
      className="scrollpy-example"
      data-bs-spy="scroll"
      data-bs-target="#navbar"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
    >
      <HeroSection />
      <ProjectsSection />
      <TechStack />
      <Connect />
    </div>
  );
};

export default Home;

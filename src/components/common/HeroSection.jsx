import { useTheme } from "../../context/ThemeContext";

const HeroSection = () => {
  const { theme } = useTheme();

  return (
    <section className="pb-5" id="hero">
      <h1 className="fw-bold display-3 pt-5">Vaibhav Chopde</h1>
      <p className="text-body-tertiary fs-2">full stack dev</p>
      <div
        className={` ${theme === "dark" ? "bg-info" : "bg-success"}`}
        style={{ width: "100px", height: "4px" }}
      ></div>
      <p className="col-6 fs-5 mt-4">
        Passionate full-stack developer crafting intuitive digital experiences
        with modern technologies.
      </p>
      <p className="col-8 fs-5">
        Specializing in React, Node.js, and MongoDB to build scalable and
        user-centered applications.
      </p>
      <div className="d-flex gap-4 mt-4">
        <a href="#connect">
          <button
            className={`btn ${theme === "dark" ? "btn-info" : "btn-success"}`}
          >
            Contact Me
          </button>
        </a>
        <a
          href="https://app.enhancv.com/share/3ff6317f/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
          target="_blank"
        >
          <button
            className={`btn ${
              theme === "dark" ? "btn-outline-secondary" : "btn-outline-danger"
            }`}
          >
            Resume
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

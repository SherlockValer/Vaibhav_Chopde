import { BsCode, BsEye } from "react-icons/bs";
import { CiServer } from "react-icons/ci";
import { FaLaptopCode, FaServer } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const ProjectsSection = () => {
  const { theme } = useTheme();

  const projectList = [
    {
      title: "Workasana",
      image: "/workasana.png",
      description:
        "A task management and team collaboration tool where users can create projects, assign tasks, set deadlines.",
      stack: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      applink: "https://workasana-app.vercel.app/",
      frontend: "https://github.com/SherlockValer/Workasana-App",
      backend: "https://github.com/SherlockValer/Workasana-API",
    },
    {
      title: "Anvaya",
      image: "/anvaya.png",
      description:
        "A CRM tool to manage leads through different stages—from first contact to final conversion.",
      stack: ["React", "CSS", "Node.js", "Express.js", "MongoDB"],
      applink: "https://anvaya-crm-app.vercel.app/",
      frontend: "https://github.com/SherlockValer/Anvaya-CRM-App",
      backend: "https://github.com/SherlockValer/Anvaya-CRM-API",
    },
    {
      title: "Techgenix",
      image: "/techgenix.png",
      description:
        "An electronics e-commerce website with a user-friendly frontend for browsing products, managing the shopping cart, and checkout.",
      stack: ["React", "bootstrap", "Node.js", "Express.js", "MongoDB"],
      applink: "https://techgenix-app.vercel.app/",
      frontend: "https://github.com/SherlockValer/Techgenix_App",
      backend: "https://github.com/SherlockValer/Techgenix_Server",
    },
  ];

  return (
    <section className="mb-5" id="projects">
      <h1 className="fw-bold display-4 pt-5">Projects</h1>
      <p className="col-6 fs-5">
        Building solutions that solve real-world problems
      </p>
      <div
        className={` ${theme === "dark" ? "bg-info" : "bg-success"}`}
        style={{ width: "100px", height: "4px" }}
      ></div>
      {/* Cards Row */}
      <div className="row mt-5">
        {/* Cards */}
        {projectList.length > 0 &&
          projectList?.map((project) => (
            <div className="col-lg-4 col-md-6 mb-4">
              <div
                className={`card project-card`}
                style={
                  theme === "dark"
                    ? { backgroundColor: "#121212" }
                    : { backgroundColor: "#f4faca" }
                }
              >
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.image}
                  style={{ aspectRatio: "3/2" }}
                />
                <div className="card-body">
                  <h5 className="card-title fw-bold fs-4">{project.title}</h5>
                  <p
                    className="card-text text-muted"
                    style={{ height: "8rem" }}
                  >
                    {project.description}
                  </p>
                  <div className="d-flex flex-wrap gap-2 mb-4 fw-bold">
                    {project?.stack?.map((item) => (
                      <span
                        className={`badge ${
                          theme === "dark"
                            ? "text-bg-dark"
                            : "text-bg-success text-white"
                        }`}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-start align-items-start gap-4">
                    <a href={project.applink} target="_blank">
                      <BsEye className="me-2" />
                      <span>Demo</span>
                    </a>

                    <a href={project.frontend} target="_blank">
                      <FaLaptopCode className="me-2" />
                      Frontend
                    </a>
                    <a href={project.backend} target="_blank">
                      <CiServer className="me-2" />
                      Backend
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

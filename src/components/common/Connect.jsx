import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useTheme } from "../../context/ThemeContext";

const Connect = () => {
  const { theme } = useTheme();

  return (
    <section className="my-5" id="connect">
      <h1 className="fw-bold display-4 pt-5">Connect</h1>
      <p className="col-md-6 col-sm-12 fs-5">
        Let's collaborate on something amazing together
      </p>
      <div
        className={` ${theme === "dark" ? "bg-info" : "bg-success"}`}
        style={{ width: "100px", height: "4px" }}
      ></div>

      <div>
        <div className="row mt-4">
          <div className="col-lg-4 col-md-6 my-4">
            <div
              className="card p-4 project-card"
              style={
                theme === "dark"
                  ? { backgroundColor: "#121212" }
                  : { backgroundColor: "#f4faca" }
              }
            >
              <a href="mailto:vchopde77@gmail.com" target="_blank">
                <div className="d-flex gap-4 align-items-center fs-4 mb-4">
                  <IoIosMail
                    className={`${
                      theme === "dark" ? "text-info" : "text-success"
                    } fs-1`}
                  />
                  Email
                </div>
                <p className="text-muted">vchopde77@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 my-4">
            <div
              className="card p-4 project-card"
              style={
                theme === "dark"
                  ? { backgroundColor: "#121212" }
                  : { backgroundColor: "#f4faca" }
              }
            >
              <a href="https://github.com/SherlockValer" target="_blank">
                <div className="d-flex gap-4 align-items-center fs-4 mb-4">
                  <FaGithub
                    className={`${
                      theme === "dark" ? "text-info" : "text-success"
                    } fs-1`}
                  />
                  Github
                </div>
                <p className="text-muted">Follow on Github</p>
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 my-4">
            <div
              className="card p-4 project-card"
              style={
                theme === "dark"
                  ? { backgroundColor: "#121212" }
                  : { backgroundColor: "#f4faca" }
              }
            >
              <a href="https://linkedin.com/in/vaibhav-chopde" target="_blank">
                <div className="d-flex gap-4 align-items-center fs-4 mb-4">
                  <FaLinkedin
                    className={`${
                      theme === "dark" ? "text-info" : "text-success"
                    } fs-1`}
                  />
                  LinkedIn
                </div>
                <p className="text-muted">Connect on LinkedIn</p>
              </a>
            </div>
          </div>
        </div>

        <div className="row"></div>
      </div>
    </section>
  );
};

export default Connect;

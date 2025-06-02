import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header
      className="sticky-top border-bottom border-dark-subtle"
      style={
        theme === "dark"
          ? { backgroundColor: "#121212" }
          : { backgroundColor: "#EEF1DA" }
      }
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg" id="navbar">
          <div className="d-flex gap-2 align-items-center">
            <img
              src={`${theme === "dark" ? "logow.svg" : "./logob.svg"}`}
              style={{ width: "4rem" }}
            />
            <Link className="navbar-brand fw-bold fs-4" to="/">
              Vaibhav Chopde
            </Link>
            <div
              onClick={() =>
                setTheme((theme) => (theme === "dark" ? "light" : "dark"))
              }
              style={{ cursor: "pointer" }}
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </div>
          </div>

          {/* Button */}
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-underline">
              <li className="nav-item">
                <a className="nav-link" href="#hero">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tech-stack">
                  Skills
                </a>
              </li>
              {/* <li className="nav-item">Blogs</li> */}
              <li className="nav-item">
                <a className="nav-link" href="#connect">
                  Connect
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

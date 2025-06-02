import {
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiAxios,
  SiCanva,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMongoose,
  SiPostman,
  SiVercel,
} from "react-icons/si";
import { TbBrandOauth } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { useTheme } from "../../context/ThemeContext";

const TechStack = () => {
  const { theme } = useTheme();

  return (
    <section className="my-5" id="tech-stack">
      <h1 className="fw-bold display-4 pt-5">Tech Stack</h1>
      <p className="col-6 fs-5">Technologies and tools I work with</p>
      <div
        className={` ${theme === "dark" ? "bg-info" : "bg-success"}`}
        style={{ width: "100px", height: "4px" }}
      ></div>
      <div className="my-5 fs-5">
        <div className="row">
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <FaReact className="fs-4" />
            React
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <RiTailwindCssFill className="fs-4" />
            Tailwind CSS
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <FaBootstrap className="fs-4" />
            Bootstrap
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <FaNodeJs className="fs-4" />
            Node.js
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <SiExpress className="fs-4" />
            Express
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <SiJsonwebtokens className="fs-4" />
            JWT
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <SiMongodb className="fs-4" />
            MongoDB
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <SiMongoose className="fs-4" />
            Mongoose
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <SiAxios className="fs-4" />
            Axios
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <TbBrandOauth className="fs-4" />
            OAuth 2.0
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <SiVercel className="fs-4" />
            Vercel
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <VscVscode className="fs-4" />
            VS Code
          </div>
        </div>

        <div className="row">
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <FaGitAlt className="fs-4" />
            Git
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <FaGithub className="fs-4" />
            Github
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <MdOutlineDeveloperMode className="fs-4" />
            Dev Tools
          </div>
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center mb-5">
            <SiPostman className="fs-4" />
            Postman
          </div>
        </div>

        {/* <div className="row mb-5">
          <div className="col-md-3 col-sm-6 d-flex gap-3 align-items-center">
            <FaGithub className="fs-4" />
            Github
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TechStack;

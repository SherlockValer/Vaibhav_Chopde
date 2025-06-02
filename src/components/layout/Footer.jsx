import { FcLike } from "react-icons/fc";
import { useTheme } from "../../context/ThemeContext";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className="py-5 text-center">
      <p>
        &copy; {new Date().getFullYear()} Vaibhav Chopde • All rights reserved
      </p>
      <p>
        Built with <FcLike /> using React & Bootstrap
      </p>
      <p>
        Learning full stack development at
        <a
          href="https://neog.camp/"
          target="_blank"
          className={`ms-2 ${
            theme === "dark" ? "text-info" : "text-success fw-semibold"
          }`}
        >
          neog.camp
        </a>
      </p>
    </footer>
  );
};

export default Footer;

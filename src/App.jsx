import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { useTheme } from "./context/ThemeContext";

function App() {
  const { theme } = useTheme();
  console.log(theme);

  return (
    <div
      data-bs-theme={theme}
      style={
        theme === "dark"
          ? { backgroundColor: "#121212", color: "#fff" }
          : { backgroundColor: "#EEF1DA" }
      }
    >
      <Header />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

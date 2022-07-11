import { useEffect, useState } from "react";
import Button from "./components/atoms/button/Button";
import Footer from "./components/organisms/footer/Footer";
import Header from "./components/organisms/header/Header";
import Heading from "./components/atoms/heading/Heading";

function App() {
  const darkTheme = {
    background: "#0f0f0f",
    color: "#f0f0f0",
  };

  const lightTheme = {
    background: "#f0f0f0",
    color: "#0f0f0f",
  };

  const [theme, setTheme] = useState("");

  useEffect(() => {
    const userPreferredTheme = localStorage.getItem("theme");
    if (userPreferredTheme) {
      setTheme(userPreferredTheme);
    } else {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const handleThemeToggle = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div style={theme === "light" ? lightTheme : darkTheme} id="app">
      <Header>
        <Heading level="1">tech blog</Heading>
        <Button onClick={handleThemeToggle}>
          {theme === "dark" ? "light" : "dark"}
        </Button>
      </Header>
      <Footer>
        <Heading level="5">
          &copy; jessesandvik {new Date().getFullYear()}
        </Heading>
      </Footer>
    </div>
  );
}

export default App;

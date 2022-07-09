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
    color: "$0f0f0f",
  };

  return (
    <div style={darkTheme} id="app">
      <Header>
        <Heading level="1">tech blog</Heading>
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

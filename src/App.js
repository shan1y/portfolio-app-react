import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <header>
        <Navbar />
      </header>
      <div className="sections">
        <Home />
        <About />
        <Skills />
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;

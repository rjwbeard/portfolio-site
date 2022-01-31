import "./App2.css";
import AboutMe from "./AboutMe";

function App2() {
  return (
    <div className="App">
      <div className="left-column">
        <AboutMe />
      </div>
      <div className="right-column">
        <button className="app-link" id="portfolio-link">
          Portfolio
        </button>
        <button className="app-link" id="experience-link">
          Experience
        </button>
        <button className="app-link" id="contact-link">
          Contact
        </button>
      </div>
    </div>
  );
}

export default App2;

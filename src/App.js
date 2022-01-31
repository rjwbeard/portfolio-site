// import "./App.css";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <div className="app-links-div" id="header">
        <button className="app-link" id="portfolio-link">
          Portfolio
        </button>
        <button className="app-link" id="experience-link">
          Experience
        </button>
      </div>
      <div className="app-about-me">
        <AboutMe />
      </div>
      <div className="app-links-div" id="footer">
        <button className="app-link">Contact</button>
      </div>
    </div>
  );
}

export default App;

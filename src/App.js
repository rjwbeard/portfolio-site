import "./App.css";
import Content from "./content.json";
import AboutMe from "./AboutMe";

function App2() {
  return (
    <div className="App">
      <div className="left-column">
        <AboutMe />
      </div>
      <div className="right-column">
        <button className="app-link" id="portfolio-link">
          {Content.App.portfolioButton}
        </button>
        <button className="app-link" id="experience-link">
          {Content.App.experienceButton}
        </button>
        <button className="app-link" id="contact-link">
          {Content.App.contactButton}
        </button>
      </div>
    </div>
  );
}

export default App2;

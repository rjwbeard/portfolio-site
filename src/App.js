import "./App.css";
import AboutMe from "./AboutMe";

function App() {
  return (
    <div className="App">
      <div className="app-header-links">
        <button className="app-portfolio-link">Portfolio</button>
        <button className="app-experience-link">Experience</button>
      </div>
      <div className="app-about-me">
        <AboutMe />
      </div>
      <div className="app-footer-links">
        <button className="app-contact-link">Contact</button>
      </div>
    </div>
  );
}

export default App;

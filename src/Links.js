import Content from "./content.json";

const Links = () => {
  return (
    <div className="Links">
      <a
        className="app-link"
        id="portfolio-link"
        href="https://github.com/rjwbeard"
      >
        {Content.App.portfolioButton.text}
      </a>
      <a
        className="app-link"
        id="experience-link"
        href="https://www.linkedin.com/in/rebeccajwbeard/"
      >
        {Content.App.experienceButton.text}
      </a>
      <a className="app-link" id="contact-link">
        {Content.App.contactButton.text}
      </a>
    </div>
  );
};

export default Links;

import Content from "./content.json";
import TWITTER from "./images/TWITTER.png";
import Modal from "./Modal";

const Links = () => {
  return (
    <div className="Links">
      <a
        className="Links_link"
        id="portfolio-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/rjwbeard"
      >
        {Content.App.portfolioButton.text}
      </a>
      <a
        className="Links_link"
        id="experience-link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/rebeccajwbeard/"
      >
        {Content.App.experienceButton.text}
      </a>
      <Modal />
      <a
        href="https://twitter.com/mythsabouthell?ref_src=twsrc%5Etfw"
        className="Links_link"
        data-show-count="false"
        target="_blank"
        rel="noopener noreferrer"
        id="twitter-link"
      >
        <img src={TWITTER} id="twitter-icon" alt="Twitter logo" />
      </a>
    </div>
  );
};

export default Links;

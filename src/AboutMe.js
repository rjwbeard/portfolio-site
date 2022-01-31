import Content from "./content.json";

const AboutMe = () => {
  return (
    <div className="about-me">
      <header className="about-me-header">
        {Content.AboutMe.aboutMeHeader}
      </header>
      <div className="about-me-body">{Content.AboutMe.aboutMeBody}</div>
    </div>
  );
};

export default AboutMe;

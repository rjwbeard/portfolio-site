import Content from "./content.json";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <header className="about-me-header">
        {Content.AboutMe.aboutMeHeader}
      </header>
      <div className="about-me-body">{Content.AboutMe.aboutMeBody}</div>
    </div>
  );
};

export default AboutMe;

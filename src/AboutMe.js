import Content from "./content.json";

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <header className="AboutMe_header">
        {Content.AboutMe.aboutMeHeader}
      </header>
      <div className="AboutMe_body">{Content.AboutMe.aboutMeBody}</div>
    </div>
  );
};

export default AboutMe;

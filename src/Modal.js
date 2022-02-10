import { Contact } from "./Contact";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Content from "./content.json";

const Modal = () => {
  const renderContactButton = () => {
    return (
      <button
        className="Links_link"
        target="_blank"
        rel="noopener noreferrer"
        id="contact-link"
      >
        {Content.App.contactButton.text}
      </button>
    );
  };

  return (
    <Popup modal trigger={renderContactButton()}>
      {(close) => (
        <div className="Modal">
          <button className="Modal_close" onClick={close}>
            &times;
          </button>
          <div className="Modal_header"> Let's talk about tech, baby. </div>
          <div className="Modal_content">
            <Contact />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Modal;

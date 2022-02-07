import { Contact } from "./Contact";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import Content from "./content.json";

const Modal = () => {
  const renderContactButton = () => {
    return (
      <button
        className="app-link"
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
          <div className="modal-header"> Let's talk about tech, baby. </div>
          <div className="modal-content">
            <Contact />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Modal;

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
          <div className="Modal_close">
            <button className="Modal_close_button" onClick={close}>
              &times;
            </button>
          </div>
          <div className="Modal_header">{Content.Contact.modalHeader}</div>
          <div className="Modal_content">
            <Contact close={close} />
          </div>
        </div>
      )}
    </Popup>
  );
};

export default Modal;

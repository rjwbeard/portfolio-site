import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form_666",
        form.current,
        "user_uSzZf6FOTBsFPHCzOFDCV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <div className="contact-info">
          <label className="contact-label">Your Name</label>
          <input
            className="contact-input"
            type="text"
            name="user_name"
            autoComplete="off"
          />
        </div>
        <div className="contact-info">
          <label className="contact-label">Your Email</label>
          <input
            className="contact-input"
            type="email"
            name="user_email"
            autoComplete="off"
          />
        </div>
        <div className="contact-message">
          <label className="contact-label">The Message</label>
          <textarea className="contact-message-textarea" name="message" />
        </div>
        <input className="contact-submit-button" type="submit" value="Send" />
      </form>
    </div>
  );
};

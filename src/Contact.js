import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Contact = ({ close }) => {
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
          console.error(error.text);
        }
      );

    close();
  };

  return (
    <div className="Contact">
      <form className="Contact_form" ref={form} onSubmit={sendEmail}>
        <div className="Contact_section">
          <label className="Contact_label">Your Name</label>
          <input
            className="Contact_input"
            type="text"
            name="user_name"
            autoComplete="off"
            required
          />
        </div>
        <div className="Contact_section">
          <label className="Contact_label">Your Email</label>
          <input
            className="Contact_input"
            type="email"
            name="user_email"
            autoComplete="off"
            required
          />
        </div>
        <div className="Contact_section">
          <label className="Contact_label">The Message</label>
          <textarea required className="Contact_textarea" name="message" />
        </div>
        <input className="Contact_submit_button" type="submit" value="Send" />
      </form>
    </div>
  );
};

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const name = formData.get("user_name").trim();
    const email = formData.get("user_email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      setPopupMessage("Please fill out all fields before sending the message.");
      setIsPopupVisible(true);
      return;
    }

    emailjs
      .sendForm("service_kn6rtd9", "template_zrgwl3c", form.current, {
        publicKey: "nmIeqqMHdOxMRbyNo",
      })
      .then(
        () => {
          setPopupMessage("Your message has been sent successfully!");
          setIsPopupVisible(true);
          form.current.reset();
        },
        (error) => {
          setPopupMessage(`Failed to send the message: ${error.text}`);
          setIsPopupVisible(true);
        }
      );
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div className="forms-container">
      {isPopupVisible && (
        <div className="popup">
          <div className="popup-content">
            <p>{popupMessage}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}

      <div className="photo-container">
        <h3>Zadaj mi pytanie</h3>
        <img
          src="../../photo-me.png"
          alt="Moje profilowe zdjęcie"
          className="photo-me"
        />
      </div>

      <form ref={form} onSubmit={sendEmail}>
        <label className="form-label">Name</label>
        <input className="form-input" type="text" name="user_name" />

        <label className="form-label">Email</label>
        <input className="form-input" type="email" name="user_email" />

        <label className="form-label">Message</label>
        <textarea className="form-textarea" name="message"></textarea>

        <input className="form-submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;

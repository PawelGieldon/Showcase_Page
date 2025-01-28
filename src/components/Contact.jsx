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
    const telephone = formData.get("telephone").trim();

    if (!name || !email || !message || !telephone) {
      setPopupMessage("Proszę wypełnij wszystkie pola");
      setIsPopupVisible(true);
      return;
    }

    emailjs
      .sendForm("service_kn6rtd9", "template_zrgwl3c", form.current, {
        publicKey: "nmIeqqMHdOxMRbyNo",
      })
      .then(
        () => {
          setPopupMessage("Twoja wiadomość została poprawnie wysłana!");
          setIsPopupVisible(true);
          form.current.reset();
        },
        (error) => {
          setPopupMessage(`Błąd w wysyłaniu wiadomości! ${error.text}`);
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
        <label className="form-label">Imię</label>
        <input className="form-input" type="text" name="user_name" />

        <label className="form-label">Email</label>
        <input className="form-input" type="email" name="user_email" />

        <label className="form-label">Telefon</label>
        <input className="form-input" type="text" name="telephone" />

        <label className="form-label">Wiadomość</label>
        <textarea className="form-textarea" name="message"></textarea>

        <input className="form-submit" type="submit" value="Wyślij" />
      </form>
    </div>
  );
}

export default Contact;

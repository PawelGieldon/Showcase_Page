import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_kn6rtd9", "template_zrgwl3c", form.current, {
        publicKey: "nmIeqqMHdOxMRbyNo",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="forms-container">
      <div className="photo-container">
        <h3>Zadaj mi pytanie</h3>
        <img src="../../photo-me.png" alt="Moje profilowe zdjęcie" className="photo-me"/>
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

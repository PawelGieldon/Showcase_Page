import React from "react";
import { LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";


function Footer() {
  return (
    <footer className="footer-container">
      <p className="footer-text">COPYRIGHT &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
      <div className="footer-links">
        <div className="contact-item">
          <LuMail className="icon" />
          <a href="mailto:pawel.contactbusiness@gmail.com" className="contact-link">
            pawel.contactbusiness@gmail.com
          </a>
        </div>
        <div className="contact-item">
          <BsTelephone className="icon" />
          <a href="tel:727677706" className="contact-link">
            727-677-706
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

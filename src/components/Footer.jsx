import React from "react";
import { LuMail } from "react-icons/lu";

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>COPYRIGHT &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED.</p>
                <div className="links-container">
                    <LuMail/>
                    <p>E-mail : przykładowy mail@gmail.com</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

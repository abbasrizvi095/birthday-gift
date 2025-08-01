import React from "react";
import "./Footer.css";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p>
          📞 <a href="tel:+919876543210" className="footer-contact-link">Contact</a>
        </p>
        <p>
          💌 <a
            href="mailto:abbasrizvi095@gmail.com?subject=Feedback on efforts behind building this"
            className="footer-feedback-link"
          >
            Send Feedback
          </a>
        </p>
      </div>

      <div className="footer-right">
      <div className="footer-share-icons">
          <a
            href="https://wa.me/?text=Check%20out%20this%20awesome%20birthday%20surprise%20for%20Ana!%20https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://yourwebsite.com"
            target="_blank"
            rel="noopener noreferrer"
            className="share-icon"
          >
            <FaFacebookF />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Made with 🩶 for Ana</p>
      </div>
    </footer>
  );
};

export default Footer;

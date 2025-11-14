import React from "react";
import "../assets/styles/Header.css";
import { 
  FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, 
  FaLinkedinIn, FaInstagram, FaYoutube, FaWhatsapp 
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-top">
      <div className="header-marquee-content">

        <div className="header-contact d-flex align-items-center">
          <FaEnvelope className="me-2" />
          <span>v4utaxsolutions@yahoo.com</span>

          <FaPhoneAlt className="ms-4 me-2" />
          <span>+91 9347023562</span>
        </div>

        <div className="header-social d-flex gap-3 ms-4">
          

          {/* ✅ Clickable WhatsApp icon */}
          <a  
            href="https://wa.me/919347023562" 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-link"
            title="Chat on WhatsApp"
          >
            <FaWhatsapp  style={{ fontSize: "24px" }}  className="text-white"/>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Header;

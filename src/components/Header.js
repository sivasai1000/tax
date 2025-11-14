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
          <span>v4utaxsolutions@yahoo.com </span>
          <FaPhoneAlt className="ms-4 me-2" />
          <span>+91 9347023562 </span>
        </div>

        <div className="header-social d-flex gap-3 ms-4">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <FaYoutube />
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
};

export default Header;

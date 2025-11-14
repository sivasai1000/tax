import React from "react";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer className="fu-footer text-center py-4">
      <p>© {new Date().getFullYear()} V4U Tax Solutions. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;

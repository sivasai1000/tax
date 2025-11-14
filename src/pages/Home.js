import React from "react";
import "../assets/styles/Home.css";
import hero from "../assets/images/tax.png";

import { FaMoneyCheckAlt, FaFileInvoice, FaToolbox } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container text-center py-5">
      <h1>Welcome to V4U Tax Solutions</h1>
      <p>We Manage Numbers, You Manage Life</p>

      <img src={hero} alt="Business" className="home-img mt-4 w-100" />

      {/* 3 Cards Section */}
      <div className="container mt-5">
        <div className="row g-4">

          {/* Income Tax */}
          <div className="col-md-4">
            <div
              className="home-service-card h-100 p-4 clickable"
              onClick={() => navigate("/incometax")}
            >
              <FaMoneyCheckAlt className="home-service-icon" />
              <h4>Income Tax</h4>
              <p>All services related to Income Tax for individuals and businesses.</p>
            </div>
          </div>

          {/* GST Filing */}
          <div className="col-md-4">
            <div
              className="home-service-card h-100 p-4 clickable"
              onClick={() => navigate("/gst")}
            >
              <FaFileInvoice className="home-service-icon" />
              <h4>GST Filing</h4>
              <p>GST Registration, Monthly Filing, Annual Returns & Compliance.</p>
            </div>
          </div>

          {/* Other Services */}
          <div className="col-md-4">
            <div
              className="home-service-card h-100 p-4 clickable"
              onClick={() => navigate("/otherservice")}
            >
              <FaToolbox className="home-service-icon" />
              <h4>Other Services</h4>
              <p>Professional tax, PF/ESI, MSME, PAN, Registrations & more.</p>
            </div>
          </div>

        </div>

        {/* ⭐ CONTACT SECTION (NEW) ⭐ */}
        <div 
          className="contact-banner mt-5 p-4 d-flex align-items-center justify-content-between clickable"
          
        >
          <div>
            <h4 className="contact-title mb-1 text-black text-start">Need Assistance?</h4>
            <p className="contact-text mb-0">Contact our expert team for help & consultation</p>
          </div>

          <button className="contact-btn" onClick={() => navigate("/contact")}>
            Contact Us →
          </button>
        </div>

      </div>
    </div>
  );
};

export default Home;

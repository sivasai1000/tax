import React from "react";
import "../assets/styles/Registrations.css";
import regImg from "../assets/images/tax_services.jpg"; // replace with your image path
import { Link } from "react-router-dom";


const Registrations = () => {
  return (
    <section className="fu-registration-section">
      {/* === Header with Background === */}
      <div className="fu-registration-hero d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="fu-registration-title">Registrations</h1>

       
                  <nav aria-label="breadcrumb" className="fu-notice-breadcrumb mt-3">
          <ol className="breadcrumb justify-content-center m-0">
            <li className="breadcrumb-item">
              <Link to="/" className="fu-notice-link">Home</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li className="breadcrumb-item">
              <Link to="/otherservice" className="fu-notice-link">Other Services</Link>
            </li>
            <li className="breadcrumb-separator">/</li>
            <li
              className="breadcrumb-item active fu-notice-active text-danger"
              aria-current="page"
            >
             Registrations
            </li>
          </ol>
        </nav>


        
      </div>

      {/* === Content Section === */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img
              src={regImg}
              alt="Business Registration"
              className="img-fluid fu-registration-img"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fu-registration-heading">
              Simplify Your Business Setup
            </h2>
            <p className="fu-registration-desc">
              We help new and existing entrepreneurs get their businesses officially registered with 
              all required authorities. From government approvals to tax registration, our 
              <strong> end-to-end support </strong> ensures a smooth start for your venture.
            </p>

            <ul className="fu-registration-list">
              <li>🏢 Private Limited / LLP / OPC Registration</li>
              <li>📄 GST & MSME Registration</li>
              <li>👷‍♂️ EPFO / ESIC Enrollment</li>
              <li>💼 Professional Tax Registration</li>
            </ul>

            <button className="fu-registration-btn mt-4">Start Registration</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registrations;

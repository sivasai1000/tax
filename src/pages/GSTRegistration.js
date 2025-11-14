import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/GSTDetails.css";
import gstImg from "../assets/images/tax_services.jpg"; // replace with your image

const GSTRegistration = () => {
  return (
    <section className="fu-gst-details">
      <div className="fu-gst-hero d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="fu-gst-hero-title">GST Registration</h1>

        

                   <nav aria-label="breadcrumb" className="fu-notice-breadcrumb mt-3">
                  <ol className="breadcrumb justify-content-center m-0">
                    <li className="breadcrumb-item">
                      <Link to="/" className="fu-notice-link">Home</Link>
                    </li>
                    <li className="breadcrumb-separator">/</li>
                    <li className="breadcrumb-item">
                      <Link to="/gst" className="fu-notice-link">GST</Link>
                    </li>
                    <li className="breadcrumb-separator">/</li>
                    <li
                      className="breadcrumb-item active fu-notice-active text-danger"
                      aria-current="page"
                    >
                    GST Registration
                    </li>
                  </ol>
                </nav>
      </div>

      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img src={gstImg} alt="GST Registration" className="img-fluid fu-gst-img" />
          </div>
          <div className="col-lg-6">
            <h2 className="fu-gst-heading">Get Your Business GST Registered Effortlessly</h2>
            <p className="fu-gst-desc">
              We simplify your GST registration with complete documentation and support.
              Ensure your business stays compliant from day one.
            </p>
            <ul className="fu-gst-list">
              <li>✅ End-to-End Application Support</li>
              <li>📜 Document Verification & Filing</li>
              <li>📈 Expert Guidance for Compliance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GSTRegistration;

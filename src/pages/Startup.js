import React from "react";
import "../assets/styles/Startup.css";
import startupImg from "../assets/images/tax.png"; // replace with your image path

const Startup = () => {
  return (
    <section className="fu-startup-section">
      {/* === Header with Background === */}
      <div className="fu-startup-hero d-flex flex-column align-items-center justify-content-center text-center">
        <h1 className="fu-startup-hero-title">Other Services</h1>

        <nav aria-label="breadcrumb" className="fu-startup-breadcrumb mt-3">
          <ol className="breadcrumb justify-content-center m-0">
            <li className="breadcrumb-item">
              <a href="/" className="fu-startup-breadcrumb-link">
               Home
              </a>
            </li>
            <li
              className="breadcrumb-item active fu-startup-breadcrumb-active"
              aria-current="page"
            >
              Other Services
            </li>
          </ol>
        </nav>
      </div>

      {/* === Content Section === */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img
              src={startupImg}
              alt="Startup Assistance"
              className="img-fluid fu-startup-img"
            />
          </div>

          <div className="col-lg-6">
            <h2 className="fu-startup-heading">Services for Every Business Need</h2>
            <p className="fu-startup-desc">
              Whether you're launching a startup or scaling your business, we provide
              <strong> legal, tax, and compliance solutions </strong>
              that simplify your journey and help you focus on growth.
            </p>

            <ul className="fu-startup-list">
              <li>✅ Company Incorporation & Registration</li>
              <li>📜 Trademark & IP Filing</li>
              <li>📈 Business Plan & Growth Consulting</li>
              <li>📊 Tax Filing & Accounting Support</li>
            </ul>

            <button className="fu-startup-btn mt-4">Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;

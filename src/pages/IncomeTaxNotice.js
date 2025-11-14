import React from "react";
import "../assets/styles/IncomeTaxNotice.css";
import taxImg from "../assets/images/tax_services.jpg"; // replace with your actual image
import { Link } from "react-router-dom";

const IncomeTaxNotice = () => {
  return (
    <section className="fu-notice-section">
      {/* === Header === */}
      <div className="fu-notice-hero text-center">
        <div className="container">
          <h1 className="fu-notice-title">Income Tax Notice Response</h1>

          {/* Breadcrumb */}
          <nav aria-label="breadcrumb" className="fu-notice-breadcrumb mt-3">
  <ol className="breadcrumb justify-content-center m-0">
    <li className="breadcrumb-item">
      <Link to="/" className="fu-notice-link">Home</Link>
    </li>
    <li className="breadcrumb-separator">/</li>
    <li className="breadcrumb-item">
      <Link to="/incometax" className="fu-notice-link">Income Tax</Link>
    </li>
    <li className="breadcrumb-separator">/</li>
    <li
      className="breadcrumb-item active fu-notice-active text-danger"
      aria-current="page"
    >
      Notice Response
    </li>
  </ol>
</nav>

        </div>
      </div>

      {/* === Content Section === */}
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-6 text-center">
            <img src={taxImg} alt="Tax Notice" className="img-fluid fu-notice-img" />
          </div>

          <div className="col-lg-6">
            <h2 className="fu-notice-heading">Stay Compliant, Stay Stress-Free</h2>
            <p className="fu-notice-desc">
              Getting an Income Tax notice can be stressful, but it doesn’t have to be.
              Our experts help you understand the reason for the notice, prepare the
              correct response, and ensure timely submission to avoid penalties.
            </p>

            <ul className="fu-notice-list">
              <li>📄 Drafting and filing response letters</li>
              <li>📊 Reviewing your tax return discrepancies</li>
              <li>💬 Expert guidance on next steps</li>
              <li>⚖️ Representation before tax authorities</li>
            </ul>

            <button className="fu-notice-btn mt-4">Get Assistance</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeTaxNotice;

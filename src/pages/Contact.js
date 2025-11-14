import React from "react";
import "../assets/styles/Contact.css";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="fu-contact-wrapper py-5">
      <div className="container">
        <div className="row g-5 align-items-start">

          {/* LEFT SIDE CONTENT */}
          <div className="col-lg-6">
            <p className="fu-contact-subtitle">CONTACT US</p>
            <h1 className="fu-contact-title">Get In Touch</h1>
            <p className="fu-contact-desc">
              With complexities and legalities of our country, we are here to help you 
              cross the hurdles and glitches that you face while you wish to make your 
              business at ease. We will bring every solution pertaining to statutory 
              and legal compliances for your business that is time consuming for you.
            </p>

            {/* Visit Us */}
            <div className="fu-contact-item d-flex align-items-start mt-4">
              <div className="fu-contact-icon">
                <FaMapMarkerAlt  />
              </div>
              <div className="ms-3">
                <h5 className="fu-contact-label">Visit Us:</h5>
                <p className="fu-contact-text">
                  FLAT No. 101, SVSS RESIDENCY, AMEENPUR MUNICIPALITY, PATANCHERU MANDAL, SANGAREDDT DISTRICT

                </p>
              </div>
            </div>

            {/* Mail Us */}
            <div className="fu-contact-item d-flex align-items-start mt-4">
              <div className="fu-contact-icon">
                <FaEnvelope />
              </div>
              <div className="ms-3">
                <h5 className="fu-contact-label">Mail Us:</h5>
                <p className="fu-contact-text">v4utaxsolutions@yahoo.com</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="col-lg-6">
            <div className="fu-contact-form-card p-4">
              <h3 className="fu-form-title mb-4">Drop Us a Line</h3>

              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <label>Name</label>
                    <input type="text" className="form-control fu-input" />
                  </div>

                  <div className="col-md-6">
                    <label>Email</label>
                    <input type="email" className="form-control fu-input" />
                  </div>

                  <div className="col-md-12">
                    <label>Phone</label>
                    <input type="text" className="form-control fu-input" />
                  </div>

                  <div className="col-md-12">
                    <label>Subject</label>
                    <input type="text" className="form-control fu-input" />
                  </div>

                  <div className="col-md-12">
                    <label>Message</label>
                    <textarea className="form-control fu-textarea" rows="4"></textarea>
                  </div>

                  <div className="col-12">
                    <button className="fu-submit-btn mt-3">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

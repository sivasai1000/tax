import React from "react";
import "../assets/styles/Services.css";
import { useNavigate } from "react-router-dom";
import { FaRegClipboard, FaFileInvoice, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  const serviceSections = [
    {
      title: "Registrations",
      icon: <FaRegClipboard />,
      items: [
        "EPFO",
        "ESIC",
        "GST",
        "Labour",
        "Professional Tax",
      ],
      link: "/registrations",
    },
    {
      title: "Compliances",
      icon: <FaFileInvoice />,
      items: [
        "EPFO Returns",
        "ESIC Returns",
        "GST Returns",
        "IT Returns",
        "Professional Tax",
      ],
      link: "/registrations",
    },
    {
      title: "Book Keeping",
      icon: <FaBook />,
      items: ["Daily Accounting", "Reconciliation", "Ledger Maintenance"],
      link: "/registrations",
    },
  ];

  return (
    <section className="fu-service-section">
      <div className="fu-service-hero text-center">
        <h1 className="fu-service-hero-title">Our Services</h1>

       
                   <nav aria-label="breadcrumb" className="fu-notice-breadcrumb mt-3">
          <ol className="breadcrumb justify-content-center m-0">
            <li className="breadcrumb-item">
              <Link to="/" className="fu-notice-link">Home</Link>
            </li>
            
            <li className="breadcrumb-separator">/</li>
            <li
              className="breadcrumb-item active fu-notice-active text-danger"
              aria-current="page"
            >
            Services
            </li>
          </ol>
        </nav>

        
      </div>

      <div className="container py-5">
        <div className="row g-4">
          {serviceSections.map((section, index) => (
            <div
              key={index}
              className="col-md-4"
              onClick={() => navigate(section.link)}
              style={{ cursor: "pointer" }}
            >
              <div className="fu-service-card h-100 p-4 text-center">
                <div className="fu-service-icon">{section.icon}</div>
                <h4 className="mt-3">{section.title}</h4>
                <ul className="fu-service-list mt-3">
                  {section.items.map((item, i) => (
                    <li key={i}>{item}</li>

                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

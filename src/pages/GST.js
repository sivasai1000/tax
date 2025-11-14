import React from "react";
import "../assets/styles/GST.css";
import { Link } from "react-router-dom";

const gstServices = [
  { title: "GST Registration", slug: "registration", desc: "Process of enrolling in GST." },
  { title: "GST Return Filing", slug: "registration", desc: "Submit your GST returns monthly or quarterly." },
  { title: "GST LUT Filing", slug: "registration", desc: "Apply for Letter of Undertaking under GST." },
  { title: "GST Registration Cancellation", slug: "registration", desc: "Cancel your GST registration easily." },
  { title: "GST Annual Return", slug: "registration", desc: "File your annual GST return seamlessly." },
  { title: "eWay Bill", slug: "registration", desc: "Generate and manage eWay bills online." },
];

const GST = () => {
  return (
    <section className="fu-gst-section py-5 text-center">
      <div className="container">
        <h5 className="fu-gst-subtitle">GST</h5>
        <h2 className="fu-gst-title">All GST Solutions in One Place</h2>

        <div className="row mt-5 g-4">
          {gstServices.map((item, i) => (
            <div key={i} className="col-md-4 d-flex">
              <Link to={`/gst/${item.slug}`} className="fu-gst-card-link w-100">
                <div className="fu-gst-card h-100 p-4 shadow-sm">
                  <div className="fu-gst-icon mb-3">🧾</div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GST;

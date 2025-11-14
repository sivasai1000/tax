import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/Navbar.css";
import logo from "../assets/images/taxlogo.svg"

const Navbar = () => {

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarNav");
    if (navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <nav className="fu-navbar navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold text-primary" to="/" onClick={closeNavbar}>
          <img src={logo} className="fu-nav-logo me-2" width={45} height={45} />
          V4U Tax Solutions
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center gap-3">

            <li className="nav-item">
              <NavLink to="/" className="nav-link" onClick={closeNavbar}>Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/incometax" className="nav-link" onClick={closeNavbar}>Income Tax</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/gst" className="nav-link" onClick={closeNavbar}>GST</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/otherservice" className="nav-link" onClick={closeNavbar}>Other Service</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/contact" className="nav-link" onClick={closeNavbar}>Contact</NavLink>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

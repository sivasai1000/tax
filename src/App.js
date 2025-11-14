import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import GST from "./pages/GST";
import IncomeTax from "./pages/IncomeTax";
import IncomeTaxNotice from "./pages/IncomeTaxNotice";
import Startup from "./pages/Startup";
import Contact from "./pages/Contact";
import GSTRegistration from "./pages/GSTRegistration";
import OtherService from "./pages/Services";
import Registrations from "./pages/Registrations"


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="fu-app d-flex flex-column min-vh-100">
        <Header />
        <Navbar />
        <main className="fu-main flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gst" element={<GST />} />
            <Route path="/incometax" element={<IncomeTax />} />
            <Route path="/income-tax-notice" element={<IncomeTaxNotice />} />
            <Route path="/startup" element={<Startup />} />
            <Route path="/otherservice" element={<OtherService />} />
            <Route path="/registrations" element={<Registrations />} />
            

            <Route path="/contact" element={<Contact />} />
            <Route path="/gst/registration" element={<GSTRegistration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

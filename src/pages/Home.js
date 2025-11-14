import React from "react";
import "../assets/styles/Home.css";
import hero from "../assets/images/tax.png"

const Home = () => {
  return (
    <div className="home-container text-center py-5">
      <h1>Welcome to V4U Tax Solutions</h1>
      <p>We Manage Numbers, You Manage Life </p>
      <img src={hero} alt="Business" className="home-img mt-4 w-100" />
    </div>
  );
};

export default Home;

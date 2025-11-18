import React from "react";
import "./landing-page.css";
import heroTruck from "./truck.png"; // Update with your actual image path

function LandingPage() {
  return (
    <div className="landing-container">
      <header className="page-header">
        <div className="logo-section">
          {/* Replace with your actual logo if needed */}
          <span className="logo-icon">&#x1F7E6;</span>
          <span className="logo">
            <span className="logo-red">MUD</span>MAULER
          </span>
        </div>
        <form className="search-bar">
          <input type="text" placeholder="Search ..." />
        </form>
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">HOME</a></li>
            <li><a href="/products">PRODUCTS</a></li>
            <li><a href="/contact">CONTACT</a></li>
            <li><a href="/login">LOGIN</a></li>
            <li><a href="/register" className="signup-btn">SIGN UP</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero-section" style={{ backgroundImage: `url(${heroTruck})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">DOMINATE THE DIRT</h1>
          <p className="hero-subtext">
            Premium off-road tires engineered for extreme terrain.<br/>
            When the path ends, your adventure begins.
          </p>
          <div className="hero-buttons">
            <a href="/products" className="btn-red">SHOP TIRES</a>
            <a href="/learn" className="btn-outline">LEARN MORE</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;

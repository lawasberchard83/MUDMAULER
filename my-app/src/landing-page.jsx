import React from "react";
import "./landing-page.css";
import tireImg from "./tire-img.png";

function LandingPage() {
  return (
    <div className="landing-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-red">MUD</span>MAULER
        </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Products</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/register" className="signup-btn">Sign Up</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            <span className="highlight">EVOLVED PERFORMANCE</span><br />
            Premium Off-Road Tires
          </h1>

          <p>
            Engineered for extreme grip, durability, and power.  
            Built to dominate mud, mountains, and unpredictable terrain.
          </p>

          <a href="#features" className="hero-btn">Shop Now</a>
        </div>

        <div className="hero-img">
          <img src={tireImg} alt="Tire" />
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="features" className="featured-section">
        <h2 className="section-title">Featured Tires</h2>

        <div className="product-grid">
          {["Mud Claw XT", "All Terrain Pro", "Mountain Grip", "Trail Beast"].map((name, i) => (
            <div className="product-card" key={i}>
              <img src={tireImg} alt={name} />
              <h3>{name}</h3>
              <p>Engineered for maximum traction and durability.</p>
              <button className="buy-btn">View Details</button>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} MUDMAULER. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;

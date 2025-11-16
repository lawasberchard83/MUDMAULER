import React from "react";
import "./landing-page.css";
import tireImg from "./tire-img.png"; 

function LandingPage() {
  return (
    <div className="landing-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-green">MUD</span>MAULER
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
            <span className="highlight">MUDMAULER</span>, Your
            <br /> Off-Road Tire Specialist
          </h1>
          <p>
            Conquer any terrain with our heavy-duty, high-grip tires built for
            mud, mountains, and everything in between. Reliable, durable, and
            ready for rough places.
          </p>
          <a href="#features" className="hero-btn">Shop Tires</a>
        </div>

        <div className="hero-img">
          <img src={tireImg} alt="Tire" />
        </div>
      </section>

      {/* Featured products will be appended below, no changes above */}
      <section id="features" className="featured-section">
        <h2 className="section-title">Featured Tires</h2>
        <div className="product-grid">
          {["Mud Claw XT","All Terrain Pro","Mountain Grip","Trail Beast"].map((n,i)=>(
            <div className="product-card" key={i}>
              <img src={tireImg} alt={n} />
              <h3>{n}</h3>
              <p>High-performance tire built for off-road adventure.</p>
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

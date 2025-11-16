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

      </div>
    );
  }

  export default LandingPage;

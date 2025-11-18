import React from "react";
import "./register-page.css";
import tire from "./tire-img.png";

const RegisterPage = () => {
  return (
    <div className="register-bg" style={{ backgroundImage: `url(${tire})` }}>
      <div className="bg-overlay"></div>

      {/* LEFT SIDE TEXT */}
      <div className="register-header">
        <div className="mudmauler-text">MUDMAULER</div>
        <div className="welcome-banner">
          WELCOME TO YOUR <span className="highlight">ADVENTURE!</span>
        </div>
      </div>

      {/* RIGHT SIDE CARD */}
      <div className="register-center">
        <div className="register-card">
          <h1 className="register-title">REGISTER</h1>
          <p className="register-desc">Create your account to get started</p>

          <form className="register-form">
            <div className="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Username</label>
              <input type="text" placeholder="Choose a username" required />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" placeholder="Create a password" required />
            </div>

            <div className="form-group">
              <label>Confirm Password</label>
              <input type="password" placeholder="Repeat your password" required />
            </div>

            <button className="register-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

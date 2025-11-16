import React from "react";
import "./login-page.css";
import tire from "./tire-img.png"; // Confirm path

const LoginPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic here
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="mudmauler-text">MUDMAULER</div>
        <div className="tire-bg" style={{ backgroundImage: `url(${tire})` }} />
      </div>
      <div className="login-right">
        <div className="welcome-banner">
          WELCOME BACK!
        </div>
        <h1>LOGIN</h1>
        <p className="login-desc">Enter your Credentials to access your account</p>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
          <div className="login-options">
            <label>
              <input type="checkbox" />
              Remember for 30 days
            </label>
            <span className="forgot-pwd">Forgot Password</span>
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
        <div className="signup-link">
          Don't have an account? <span>Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

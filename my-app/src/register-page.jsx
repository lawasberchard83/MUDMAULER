// register-page.jsx
import React from 'react';
import './register-page.css';
import tire from './tire-img.png'; // confirm path

const RegisterPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // registration logic here
  };

  return (
    <div className="register-container">
      <div className="register-left">
        <div className="mudmauler-text">MUDMAULER</div>
        <div className="tire-bg" style={{ backgroundImage: `url(${tire})` }}></div>
      </div>
      <div className="register-right">
        <div className="welcome-banner">JOIN THE ADVENTURE!</div>
        <h1>REGISTER</h1>
        <p className="register-desc">Create your account to get started</p>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" placeholder="Enter your email" required />
          
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Choose a username" required />

          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Create a password" required />

          <label htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" placeholder="Repeat your password" required />

          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

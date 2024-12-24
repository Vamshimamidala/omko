import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <section className="copy">
        <nav className="navbar">
          <ul className="navbar-list">
            <li className="navbar-item"><Link to="/about">About Us</Link></li>
            <li className="navbar-item"><Link to="/service">Services</Link></li>
            <li className="navbar-item"><Link to="/contact">Contact Us</Link></li>
            <li className="navbar-item"><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li className="navbar-item"><Link to="/terms-of-service">Terms of Service</Link></li>
          </ul>
          <p>Copyrights@2024 Omko Solutions All Rights Reserved</p>
        </nav>
      </section>
    </div>
  );
};

export default Footer;

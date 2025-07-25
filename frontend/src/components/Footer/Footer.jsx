import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <h1 className="brand-logo">
            Tastify<span className="brand-dot">.</span>
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            quaerat iure voluptas sed labore modi voluptates, officiis nam
            nesciunt facere eius earum rem dolorem aliquid aut suscipit ullam
            exercitationem soluta?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-212-2345</li>
            <li>cantact@admin.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 @ Tastify.com - All Right Reserved
      </p>
    </div>
  );
};

export default Footer;

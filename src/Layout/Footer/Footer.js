import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <div className="footer__row">
            <a href="#" className="footer__link">
              Home
            </a>
            <a href="#" className="footer__link">
              About
            </a>
            <a href="#" className="footer__link">
              Menu
            </a>
            <a href="#" className="footer__link">
              Info
            </a>
            <a href="#" className="footer__link">
              Contact
            </a>
            <a href="#" className="footer__link">
              Bookings
            </a>
            <a href="#" className="footer__link">
              Privacy Policy
            </a>
          </div>
          <div className="footer__row">
            <a href="#" className="footer__link">
              Style Guide
            </a>
            <a href="#" className="footer__link">
              Licenses
            </a>
            <a href="#" className="footer__link">
              Instructions
            </a>
            <a href="#" className="footer__link">
              Changelog
            </a>
            <a href="#" className="footer__link">
              Password
            </a>
            <a href="#" className="footer__link">
              404
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© Latte Cafe 2022.</p>
          <p className="footer__credits">
            Built by Nikolai Bain. Powered by Webflow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

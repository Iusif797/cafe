import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__links">
          <div className="footer__row">
            <a href="/" className="footer__link">
              Home
            </a>
            <a href="/about" className="footer__link">
              About
            </a>
            <a href="/menu" className="footer__link">
              Menu
            </a>
            <a href="/info" className="footer__link">
              Info
            </a>
            <a href="/contact" className="footer__link">
              Contact
            </a>
            <a href="/bookings" className="footer__link">
              Bookings
            </a>
            <a href="/privacy" className="footer__link">
              Privacy Policy
            </a>
          </div>
          <div className="footer__row">
            <a href="/style-guide" className="footer__link">
              Style Guide
            </a>
            <a href="/licenses" className="footer__link">
              Licenses
            </a>
            <a href="/instructions" className="footer__link">
              Instructions
            </a>
            <a href="/changelog" className="footer__link">
              Changelog
            </a>
            <a href="/password" className="footer__link">
              Password
            </a>
            <a href="/404" className="footer__link">
              404
            </a>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__copyright">© Latte Cafe 2023.</p>
          <p className="footer__credits">
            Built by <span className="footer__developer">Iusif Mamedov</span>.
            Powered by Webflow.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__developer">
          <p className="footer__developer-text">
            Crafted with passion and precision
            <span>
              Designed & Developed by{" "}
              <a
                href="https://github.com/Iusif797"
                target="_blank"
                rel="noopener noreferrer"
              >
                Iusif Mamedov
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

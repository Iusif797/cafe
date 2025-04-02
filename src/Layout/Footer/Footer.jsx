import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__developer">
          <p className="footer__developer-text">
            Designed & Developed with ❤️ by{" "}
            <a
              href="https://github.com/IusifMamedov"
              target="_blank"
              rel="noopener noreferrer"
            >
              Iusif Mamedov
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

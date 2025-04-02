import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__developer">
          <span className="footer__developer-text">Разработано</span>
          <span className="footer__developer-name">Iusif Mamedov</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

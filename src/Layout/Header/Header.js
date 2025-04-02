import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="/about" className="header__menu-link">
                About
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/menu" className="header__menu-link">
                Menu
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/info" className="header__menu-link">
                Info
              </a>
            </li>
            <li className="header__menu-item">
              <a href="/booking" className="header__menu-link">
                Booking
              </a>
            </li>
          </ul>

          <a href="/" className="header__logo">
            LATTE CAFE
          </a>

          <div className="header__social">
            <a href="mailto:info@example.com" className="header__social-link">
              <i className="far fa-envelope"></i>
            </a>
            <a
              href="https://facebook.com"
              className="header__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com"
              className="header__social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

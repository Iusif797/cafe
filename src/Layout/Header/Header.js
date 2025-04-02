import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { IoLogoFacebook } from "react-icons/io";
import { RiInstagramLine } from "react-icons/ri";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav">
          <ul className="header__list">
            <li className="header__item">About</li>
            <li className="header__item">Menu</li>
            <li className="header__item">Info</li>
            <li className="header__item">Booking</li>
          </ul>
          <h1 className="header__title">LATTE CAFE</h1>
          <ul className="header__list">
            <li className="header__item header__item-icon">
              <HiOutlineMail />
            </li>
            <li className="header__item header__item-icon">
              <IoLogoFacebook />
            </li>
            <li className="header__item header__item-icon">
              <RiInstagramLine />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

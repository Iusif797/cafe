import React from "react";
import "./Menu.scss";

const Menu = () => {
  return (
    <section className="menu">
      <div className="container">
        <div className="menu__header">
          <h2 className="menu__title">Menu</h2>
          <p className="menu__description">
            We change our menu every season. Here is what we are currently
            dishing up.
          </p>
        </div>

        <div className="menu__content">
          <div className="menu__left">
            <div className="menu__buttons">
              <button className="menu__button menu__button--active">
                Food Menu
              </button>
              <button className="menu__button">Drinks Menu</button>
              <button className="menu__button">Takeaway Menu</button>
            </div>
          </div>

          <div className="menu__right">
            <h2 className="menu__cafe-title">LATTE CAFE</h2>

            <div className="menu__section">
              <h3 className="menu__section-title">Entres</h3>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">Avocado Pear Soup</h4>
                  <span className="menu__item-price">$24</span>
                </div>
                <p className="menu__item-description">
                  Avocado, Saratoga Chips, Szechuan Button
                </p>
              </div>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">Rocket Raisin Salad</h4>
                  <span className="menu__item-price">$18</span>
                </div>
                <p className="menu__item-description">
                  Smoked Olive Oil, Fennel, Parmigiano di Reggiano
                </p>
              </div>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">Pepe alla Chitarra</h4>
                  <span className="menu__item-price">$25</span>
                </div>
                <p className="menu__item-description">
                  Spaghetti, Pancetta, Pecorino Romano
                </p>
              </div>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">Chilli Lobster</h4>
                  <span className="menu__item-price">$42</span>
                </div>
                <p className="menu__item-description">
                  Served With Texas Toast
                </p>
              </div>
            </div>

            <div className="menu__section">
              <h3 className="menu__section-title">Mains</h3>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">New York Red Steak</h4>
                  <span className="menu__item-price">$63</span>
                </div>
                <p className="menu__item-description">
                  Fiddleheads, Day Lily, Arugula, Fingerling Potatoes
                </p>
              </div>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">Fig and Rosemary Salad</h4>
                  <span className="menu__item-price">$48</span>
                </div>
                <p className="menu__item-description">
                  Sauce Proposal, Cauliflower, Hazelnuts, Golden Raisins
                </p>
              </div>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">Everything From The Sea</h4>
                  <span className="menu__item-price">$48</span>
                </div>
                <p className="menu__item-description">
                  White & Green Asparagus, Spring Onion, Sugar Snaps, Meyer
                  Lemon
                </p>
              </div>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">
                    Roasted Chicken & Duck Claypot
                  </h4>
                  <span className="menu__item-price">$59</span>
                </div>
                <p className="menu__item-description">
                  Yukon Gold Potatoes, Broccoli Rabe, Pan Drippings
                </p>
              </div>

              <div className="menu__item">
                <div className="menu__item-header">
                  <h4 className="menu__item-title">
                    2-Month Slow Beef in Wine
                  </h4>
                  <span className="menu__item-price">$43</span>
                </div>
                <p className="menu__item-description">
                  Charred Green Beans, Romesco, Beef Fat Balsamic Onion
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

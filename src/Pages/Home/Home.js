import React from "react";
import bg from "../../Assets/img/home-img.png";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="home__content">
          <div className="home__image-wrapper">
            <div className="home__decoration home__decoration--top-left"></div>
            <div className="home__decoration home__decoration--bottom-right"></div>

            <div className="home__image-container">
              <img src={bg} alt="Latte Cafe" className="home__image" />
              <div className="home__overlay">
                <h1 className="home__title">LATTE CAFE</h1>
                <div className="home__title-line"></div>
                <p className="home__subtitle">Specialty coffee & simple food</p>
                <a href="#" className="home__button">
                  Explore Menu
                </a>
              </div>
            </div>
          </div>

          <div className="home__icons">
            <div className="home__icon">
              <i className="fa fa-coffee"></i>
              <span>Premium Coffee</span>
            </div>
            <div className="home__icon">
              <i className="fa fa-cutlery"></i>
              <span>Fresh Food</span>
            </div>
            <div className="home__icon">
              <i className="fa fa-heart"></i>
              <span>Cozy Atmosphere</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

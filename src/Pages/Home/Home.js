import React from "react";
import bgImage from "../../Assets/img/home-img.png";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div
        className="home__content"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="home__overlay">
          <h1 className="home__title">LATTE CAFE</h1>
          <div className="home__title-line"></div>
          <p className="home__subtitle">Specialty coffee & simple food</p>
          <a href="/menu" className="home__button">
            Explore Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

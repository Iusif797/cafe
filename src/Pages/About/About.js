import React from "react";
import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title">About Us</h2>
        <p className="about__text">
          Tucked away in the corner of Wellington,{" "}
          <span className="about__text--italic">Latte Cafe</span> is a local
          neighbourhood cafe and bar. Latte is all about doing what we love, in
          a city that we love. We keep stocked with local produce and pastries.
          Bring your family for a bite, or meet your friends for a coffee or
          warm drink.
        </p>
      </div>
    </section>
  );
};

export default About;

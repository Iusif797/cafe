import React from "react";
import "./Award.scss";

const Award = () => {
  return (
    <section className="award">
      <div className="container">
        <div className="award__content">
          <div className="award__left">
            <h2 className="award__title">
              Award winning
              <br />
              cafe and bar.
            </h2>
          </div>
          <div className="award__right">
            <p className="award__text">
              Our cafe has been recognized for its exceptional quality and
              service, winning multiple local and national awards. We take pride
              in creating a warm, inviting atmosphere where guests can enjoy
              premium coffee and delicious food.
            </p>
            <p className="award__text award__text--margin">
              Each dish is crafted with care using locally-sourced, seasonal
              ingredients. Our baristas are trained to prepare coffee that
              highlights the unique characteristics of each bean variety,
              resulting in exceptional flavor profiles that have earned us
              recognition in the culinary community.
            </p>
            <p className="award__text award__text--margin">
              We're honored to be part of your community and look forward to
              serving you soon.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Award;

import React from "react";
import "./Info.scss";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__content">
          <div className="info__column">
            <h3 className="info__title">Location</h3>
            <p className="info__text">
              101 Cuba St,
              <br />
              Te Aro, Wellington
            </p>
          </div>

          <div className="info__column">
            <h3 className="info__title">Hours</h3>
            <p className="info__text">
              Tuesday to Friday
              <br />
              7AM - 3PM
            </p>
            <p className="info__text info__text--margin">
              Saturday to Sunday
              <br />
              8AM - 3PM
            </p>
          </div>

          <div className="info__column">
            <h3 className="info__title">Mondays?</h3>
            <p className="info__text">
              We are closed on Mondays
              <br />
              to reflect and refuel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;

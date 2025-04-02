import React from "react";
import "./Gallery.scss";
import vine from "../../Assets/img/vine.png";
import salad from "../../Assets/img/salad.png";
import cafe from "../../Assets/img/cafe-png.png";

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="container">
        <div className="gallery__grid">
          <div className="gallery__item">
            <img src={vine} alt="Bottles on shelf" className="gallery__image" />
          </div>
          <div className="gallery__item">
            <img
              src={cafe}
              alt="Restaurant interior"
              className="gallery__image"
            />
          </div>
          <div className="gallery__item gallery__item--large">
            <img src={salad} alt="Food dish" className="gallery__image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;

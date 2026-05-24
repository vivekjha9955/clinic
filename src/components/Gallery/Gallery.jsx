import React, { useEffect, useState } from "react";
import "./Gallery.css";

/* IMAGES */
import img1 from "../../Gallary/img1.jpeg";
import img2 from "../../Gallary/img2.png";
import img3 from "../../Gallary/img3.jpeg";
import img4 from "../../Gallary/img4.jpeg";
import img5 from "../../Gallary/img5.jpeg";

import img7 from "../../Gallary/img7.jpg";

const galleryImages = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img7,
];

const Gallery = () => {

  const [current, setCurrent] =
    useState(0);

  /* AUTO SLIDE */
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrent((prev) =>
        prev ===
        galleryImages.length - 1
          ? 0
          : prev + 1
      );

    }, 3000);

    return () =>
      clearInterval(interval);

  }, []);

  /* NEXT */
  const nextSlide = () => {

    setCurrent((prev) =>
      prev ===
      galleryImages.length - 1
        ? 0
        : prev + 1
    );
  };

  /* PREV */
  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0
        ? galleryImages.length - 1
        : prev - 1
    );
  };

  return (
    <section
      className="gallery"
      id="gallery"
    >

      <div className="container">

        {/* HEADING */}
        <div className="gallery__header">

          <span className="gallery__tag">
            CLINIC GALLERY
          </span>

          <h2 className="gallery__title">
            Inside Our Hearing Clinic
          </h2>

          <p className="gallery__subtitle">
            Explore our advanced hearing
            care facilities, hearing test
            equipment, speech therapy
            rooms, and patient care
            environment.
          </p>

        </div>

        {/* SLIDER */}
        <div className="gallery__slider">

          {/* IMAGE */}
          <div className="gallery__image-wrapper">

            <img
              src={
                galleryImages[current]
              }
              alt="Clinic Gallery"
              className="gallery__image"
            />

          </div>

          {/* BUTTONS */}
          <button
            className="gallery__btn gallery__btn--prev"
            onClick={prevSlide}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          <button
            className="gallery__btn gallery__btn--next"
            onClick={nextSlide}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* DOTS */}
          <div className="gallery__dots">

            {galleryImages.map(
              (_, index) => (
                <button
                  key={index}
                  className={`gallery__dot ${
                    current === index
                      ? "gallery__dot--active"
                      : ""
                  }`}
                  onClick={() =>
                    setCurrent(index)
                  }
                ></button>
              )
            )}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
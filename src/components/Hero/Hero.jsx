import React, { useState, useEffect } from "react";
import "./Hero.css";
import { HERO_SLIDES } from "../../data/constants";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const goTo = (idx) => setCurrent(idx);
  const prev = () =>
    setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  const next = () => setCurrent((c) => (c + 1) % HERO_SLIDES.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div
        className="hero__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_SLIDES.map((slide) => (
          <div className="hero__slide" key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt || `Hero Slide ${slide.id}`}
              className="hero__image"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        className="hero__btn hero__btn--prev"
        onClick={prev}
        aria-label="Previous Slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>

      {/* Next Button */}
      <button
        className="hero__btn hero__btn--next"
        onClick={next}
        aria-label="Next Slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>

      {/* Dots */}
      <div className="hero__dots">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot ${idx === current ? "hero__dot--active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
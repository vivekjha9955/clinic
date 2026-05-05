import React, { useState, useEffect, useRef } from "react";
import "./Hero.css";
import { HERO_SLIDES } from "../../data/constants";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const total = HERO_SLIDES.length;
  const trackRef = useRef(null);

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  // autoplay
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <section className="hero" id="home">
      <div
        ref={trackRef}
        className="hero__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div className="hero__slide" key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className={`hero__image ${index === current ? "active" : ""}`}
              draggable={false}
            />
          </div>
        ))}
      </div>

      {/* NAV */}
      <button className="hero__btn hero__btn--prev" onClick={prev}>‹</button>
      <button className="hero__btn hero__btn--next" onClick={next}>›</button>

      {/* DOTS */}
      <div className="hero__dots">
        {HERO_SLIDES.map((_, idx) => (
          <button
            key={idx}
            className={`hero__dot ${idx === current ? "hero__dot--active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
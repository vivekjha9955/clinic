import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./Services.css";
import SectionHeader from "../Common/SectionHeader";
import AllServices from "./AllServices";

import hearingTestImg from "../../assets/hearingtest.png";
import hearingAidImg from "../../assets/hearingaid.png";
import speechTherapyImg from "../../assets/speechtherapy.png";
import hearingCareImg from "../../assets/hearingcare.png";

import pureToneAudiometryImg from "../../assets/PureToneAudiometory.png";
import speechAudiometryImg from "../../assets/SpeechAudiometry.png";
import abrTestImg from "../../assets/ABRTest.png";
import engTestImg from "../../assets/EngTest.png";
import ecogImg from "../../assets/ECOG.png";
import vempImg from "../../assets/VVEMP.png";
import oaeImg from "../../assets/OAE.png";

const Services = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [current, setCurrent] = useState(0);

  const startX = useRef(0);
  const endX = useRef(0);
  const timerRef = useRef(null);

  // ✅ STABLE SERVICES DATA
  const allServices = useMemo(
    () => [
      { id: 1, title: "Hearing Test", image: hearingTestImg, tag: "Most Popular" },
      { id: 2, title: "Hearing Aid", image: hearingAidImg, tag: "Top Choice" },
      { id: 3, title: "Speech Therapy", image: speechTherapyImg, tag: "Special Care" },
      { id: 4, title: "Hearing Care", image: hearingCareImg, tag: "Complete Support" },
      { id: 5, title: "Pure Tone Audiometry", image: pureToneAudiometryImg, tag: "Diagnostic" },
      { id: 6, title: "Speech Audiometry", image: speechAudiometryImg, tag: "Diagnostic" },
      { id: 7, title: "ABR Test", image: abrTestImg, tag: "Advanced Test" },
      { id: 8, title: "ENG Test", image: engTestImg, tag: "Balance Test" },
      { id: 9, title: "ECoG", image: ecogImg, tag: "Advanced Test" },
      { id: 10, title: "VEMP", image: vempImg, tag: "Vestibular" },
      { id: 11, title: "OAE", image: oaeImg, tag: "Quick Screening" },
    ],
    []
  );

  // ✅ GROUPED SERVICES (2 per slide)
  const groupedServices = useMemo(() => {
    const grouped = [];
    for (let i = 0; i < allServices.length; i += 2) {
      grouped.push(allServices.slice(i, i + 2));
    }
    return grouped;
  }, [allServices]);

  // ✅ AUTOPLAY FUNCTION (STABLE)
  const startAutoPlay = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % groupedServices.length);
    }, 5000);
  }, [groupedServices.length]);

  // ✅ AUTOPLAY EFFECT
  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(timerRef.current);
  }, [startAutoPlay]);

  // ✅ NAVIGATION
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % groupedServices.length);
    startAutoPlay();
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      (prev - 1 + groupedServices.length) % groupedServices.length
    );
    startAutoPlay();
  };

  // ✅ SWIPE
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (startX.current - endX.current > 50) nextSlide();
    else if (endX.current - startX.current > 50) prevSlide();
  };

  return (
    <>
      <section className="services section section--services" id="services">
        <div className="container">
          <SectionHeader
            tag="What We Offer"
            title="Our Services"
            subtitle="Complete hearing & diagnostic services."
          />

          <div className="services__intro">
            <div
              className="services__carousel-wrap"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="services__carousel-track"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {groupedServices.map((group, index) => (
                  <div className="services__slide" key={index}>
                    <div className="services__cards-row">
                      {group.map((service) => (
                        <div className="services__mini-card" key={service.id}>
                          <span className="services__mini-badge">
                            {service.tag}
                          </span>

                          <div className="services__mini-image-wrap">
                            <img
                              src={service.image}
                              alt={service.title}
                              className="services__mini-image"
                            />
                          </div>

                          <h4 className="services__mini-title">
                            {service.title}
                          </h4>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* NAV */}
              <button
                className="services__nav services__nav--prev"
                onClick={prevSlide}
              >
                ‹
              </button>
              <button
                className="services__nav services__nav--next"
                onClick={nextSlide}
              >
                ›
              </button>
            </div>

            {/* DOTS */}
            <div className="services__dots">
              {groupedServices.map((_, index) => (
                <button
                  key={index}
                  className={current === index ? "active" : ""}
                  onClick={() => {
                    setCurrent(index);
                    startAutoPlay();
                  }}
                />
              ))}
            </div>

            {/* CTA */}
            <button
              className="services__cta-btn"
              onClick={() => setShowAllServices(true)}
            >
              View All Services →
            </button>
          </div>
        </div>
      </section>

      {showAllServices && (
        <AllServices onClose={() => setShowAllServices(false)} />
      )}
    </>
  );
};

export default Services;
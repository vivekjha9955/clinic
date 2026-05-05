import React, { useState, useEffect } from "react";
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

  const allServices = [
    {
      id: 1,
      title: "Hearing Test",
      image: hearingTestImg,
      tag: "Most Popular",
    },
    {
      id: 2,
      title: "Hearing Aid",
      image: hearingAidImg,
      tag: "Top Choice",
    },
    {
      id: 3,
      title: "Speech Therapy",
      image: speechTherapyImg,
      tag: "Special Care",
    },
    {
      id: 4,
      title: "Hearing Care",
      image: hearingCareImg,
      tag: "Complete Support",
    },
    {
      id: 5,
      title: "Pure Tone Audiometry",
      image: pureToneAudiometryImg,
      tag: "Diagnostic",
    },
    {
      id: 6,
      title: "Speech Audiometry",
      image: speechAudiometryImg,
      tag: "Diagnostic",
    },
    {
      id: 7,
      title: "ABR Test",
      image: abrTestImg,
      tag: "Advanced Test",
    },
    {
      id: 8,
      title: "ENG Test",
      image: engTestImg,
      tag: "Balance Test",
    },
    {
      id: 9,
      title: "ECoG",
      image: ecogImg,
      tag: "Advanced Test",
    },
    {
      id: 10,
      title: "VEMP",
      image: vempImg,
      tag: "Vestibular",
    },
    {
      id: 11,
      title: "OAE",
      image: oaeImg,
      tag: "Quick Screening",
    },
  ];

  const groupedServices = [];
  for (let i = 0; i < allServices.length; i += 3) {
    groupedServices.push(allServices.slice(i, i + 3));
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % groupedServices.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + groupedServices.length) % groupedServices.length
    );
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % groupedServices.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [groupedServices.length]);

  return (
    <>
      <section className="services section section--services" id="services">
        <div className="container">
          <SectionHeader
            tag="What We Offer"
            title="Our Services"
            subtitle="Comprehensive hearing, speech, rehabilitation, vestibular, and advanced diagnostic services designed to deliver accurate diagnosis, personalised care, and long-term support for every age group."
          />

          <div className="services__highlight-bar">
            <div className="services__highlight-icon">
              <i className="fas fa-stethoscope"></i>
            </div>
            <div className="services__highlight-content">
              <h3>These Are The Services We Provide</h3>
              <p>
                Explore our specialised hearing, speech, balance, and advanced
                diagnostic services designed for complete personalised care.
              </p>
            </div>
          </div>

          <div className="services__intro">
            <div className="services__carousel-wrap">
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

              <button
                className="services__nav services__nav--prev"
                onClick={prevSlide}
                aria-label="Previous services"
              >
                <i className="fas fa-chevron-left"></i>
              </button>

              <button
                className="services__nav services__nav--next"
                onClick={nextSlide}
                aria-label="Next services"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>

            <div className="services__dots">
              {groupedServices.map((_, index) => (
                <button
                  key={index}
                  className={`services__dot ${
                    current === index ? "services__dot--active" : ""
                  }`}
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to service group ${index + 1}`}
                />
              ))}
            </div>

            <div className="services__cta-wrap">
              <button
                className="services__cta-btn"
                onClick={() => setShowAllServices(true)}
              >
                Know About All Our Services
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
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
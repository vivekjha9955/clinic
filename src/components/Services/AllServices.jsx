import React, { useEffect, useState } from "react";
import "./AllServices.css";
import ServiceDetail from "./Servicedetails";

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

const SERVICES_DATA = [
  {
    id: 1,
    icon: "fas fa-microscope",
    title: "Hearing Test",
    category: "Diagnostic Service",
    image: hearingTestImg,
    description:
      "Comprehensive hearing evaluations using advanced audiometric equipment to accurately identify the type and degree of hearing loss.",
  },
  {
    id: 2,
    icon: "fas fa-headphones",
    title: "Hearing Aid",
    category: "Device & Fitting",
    image: hearingAidImg,
    description:
      "Premium hearing aid consultation, trial, fitting, programming, and after-care from leading global hearing aid brands.",
  },
  {
    id: 3,
    icon: "fas fa-comments",
    title: "Speech Therapy",
    category: "Therapy Service",
    image: speechTherapyImg,
    description:
      "Personalised speech and language therapy for children and adults to improve communication, confidence, and daily interaction.",
  },
  {
    id: 4,
    icon: "fas fa-heart-pulse",
    title: "Hearing Care",
    category: "Long-Term Care",
    image: hearingCareImg,
    description:
      "End-to-end hearing wellness support including counselling, hearing protection, tinnitus guidance, and ongoing device care.",
  },
  {
    id: 5,
    icon: "fas fa-wave-square",
    title: "Pure Tone Audiometry",
    category: "Diagnostic Service",
    image: pureToneAudiometryImg,
    description:
      "Pure Tone Audiometry measures hearing sensitivity across different frequencies and helps identify the degree and type of hearing loss accurately.",
  },
  {
    id: 6,
    icon: "fas fa-comment-dots",
    title: "Speech Audiometry",
    category: "Diagnostic Service",
    image: speechAudiometryImg,
    description:
      "Speech Audiometry evaluates how clearly you can hear and understand spoken words in real-world listening situations.",
  },
  {
    id: 7,
    icon: "fas fa-brain",
    title: "Auditory Brainstem Response (ABR)",
    category: "Advanced Diagnostic",
    image: abrTestImg,
    description:
      "ABR is an objective hearing test that measures how the hearing nerve and brainstem respond to sound.",
  },
  {
    id: 8,
    icon: "fas fa-eye",
    title: "Electronystagmography (ENG)",
    category: "Balance & Vestibular Test",
    image: engTestImg,
    description:
      "ENG records involuntary eye movements to assess the balance system.",
  },
  {
    id: 9,
    icon: "fas fa-bolt",
    title: "Electrocochleography (ECoG)",
    category: "Advanced Diagnostic",
    image: ecogImg,
    description:
      "ECoG is an advanced objective inner ear test.",
  },
  {
    id: 10,
    icon: "fas fa-sliders",
    title: "Vestibular Evoked Myogenic Potential (VEMP)",
    category: "Balance & Vestibular Test",
    image: vempImg,
    description:
      "VEMP evaluates balance organ pathways.",
  },
  {
    id: 11,
    icon: "fas fa-volume-down",
    title: "Otoacoustic Emission (OAE)",
    category: "Diagnostic Service",
    image: oaeImg,
    description:
      "OAE assesses inner ear cochlear function.",
  },
];

const ServiceCard = ({ service, onReadDetail }) => {
  const { icon, title, category, image, description } = service;

  return (
    <div className="all-service-card">
      <div className="all-service-card__img-wrap">
        {image ? (
          <img
            src={image}
            alt={title}
            className={`all-service-card__img ${
              title === "Pure Tone Audiometry"
                ? "all-service-card__img--contain"
                : ""
            }`}
          />
        ) : (
          <div className="all-service-card__icon-fallback">
            <i className={icon}></i>
          </div>
        )}
      </div>

      <div className="all-service-card__body">
        <span className="all-service-card__pill">
          <i className="fas fa-shield-heart"></i> {category}
        </span>

        <h3 className="all-service-card__title">{title}</h3>

        <p className="all-service-card__desc">{description}</p>

        <button className="all-service-card__btn" onClick={onReadDetail}>
          Read Service Detail <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

const AllServices = ({ onClose }) => {
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ allServices: true }, "");

    const handlePopState = () => {
      onClose();
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClose = () => {
    if (window.history.state && window.history.state.allServices) {
      window.history.back();
    } else {
      onClose();
    }
  };

  const handleSelect = (service) => {
    setSelectedService(service);
  };

  return (
    <>
      <div className="all-services-page">
        <div className="all-services-header">
          <div className="all-services-header__inner">
            <button className="all-services-back" onClick={handleClose}>
              <i className="fas fa-arrow-left"></i> Back
            </button>

            <div className="all-services-header__content">
              <div className="all-services-header__icon">
                <i className="fas fa-stethoscope"></i>
              </div>

              <div>
                <h1 className="all-services-header__title">All Services</h1>
                <p className="all-services-header__sub">
                  Explore our complete range of hearing services.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="all-services-body">
          <div className="container">
            <div className="all-services-grid">
              {SERVICES_DATA.map((service) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  onReadDetail={() => handleSelect(service)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
};

export default AllServices;
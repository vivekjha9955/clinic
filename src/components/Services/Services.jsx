import React, { useState } from "react";
import "./Services.css";
import SectionHeader from "../Common/SectionHeader";
import ServiceDetail from "./Servicedetails";

import hearingTestImg from "../../assets/hearingtest.png";
import hearingAidImg from "../../assets/hearingaid.png";
import speechTherapyImg from "../../assets/speechtherapy.png";
import hearingCareImg from "../../assets/hearingcare.png";

const SERVICES_DATA = [
  {
    id: 1,
    icon: "fas fa-microscope",
    title: "Hearing Test",
    category: "Diagnostic Service",
    image: hearingTestImg,
    description:
      "Comprehensive hearing evaluations using advanced audiometric equipment to accurately identify the type and degree of hearing loss.",
    shortFeatures: [
      "Accurate diagnosis",
      "Painless procedure",
      "Audiogram report",
      "Expert counselling",
    ],
  },
  {
    id: 2,
    icon: "fas fa-headphones",
    title: "Hearing Aid",
    category: "Device & Fitting",
    image: hearingAidImg,
    description:
      "Premium hearing aid consultation, trial, fitting, programming, and after-care from leading global hearing aid brands.",
    shortFeatures: [
      "Top global brands",
      "Trial available",
      "Custom fitting",
      "After-sales support",
    ],
  },
  {
    id: 3,
    icon: "fas fa-comments",
    title: "Speech Therapy",
    category: "Therapy Service",
    image: speechTherapyImg,
    description:
      "Personalised speech and language therapy for children and adults to improve communication, confidence, and daily interaction.",
    shortFeatures: [
      "All age groups",
      "Certified therapists",
      "Personalised sessions",
      "Family guidance",
    ],
  },
  {
    id: 4,
    icon: "fas fa-heart-pulse",
    title: "Hearing Care",
    category: "Long-Term Care",
    image: hearingCareImg,
    description:
      "End-to-end hearing wellness support including counselling, hearing protection, tinnitus guidance, and ongoing device care.",
    shortFeatures: [
      "Holistic care",
      "Tinnitus support",
      "Regular monitoring",
      "Preventive guidance",
    ],
  },
];

const ServiceCard = ({ service, onKnowMore }) => {
  const { icon, title, category, image, description, shortFeatures } = service;

  return (
    <div className="service-card">
      <div className="service-card__img-wrap">
        {image ? (
          <img src={image} alt={title} className="service-card__img" />
        ) : (
          <div className="service-card__icon-fallback">
            <i className={icon}></i>
          </div>
        )}
      </div>

      <div className="service-card__body">
        <span className="service-card__pill">
          <i className="fas fa-shield-heart"></i> {category}
        </span>

        <h4 className="service-card__title">{title}</h4>

        <p className="service-card__desc">{description}</p>

        <div className="service-card__features">
          {shortFeatures.map((feature, index) => (
            <div className="service-feature" key={index}>
              <i className="fas fa-circle-check"></i>
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className="know-more-btn" onClick={onKnowMore}>
          Know More <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

const Services = ({ onServiceSelect }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelect = (service) => {
    setSelectedService(service);
    if (onServiceSelect) onServiceSelect(service);
  };

  return (
    <>
      <section className="services section section--services" id="services">
        <div className="container">
          <SectionHeader
            tag="What We Offer"
            title="Our Services"
            subtitle="Comprehensive hearing, speech, and rehabilitation services designed to deliver accurate diagnosis, advanced solutions, and long-term care for every age group."
          />

          <div className="services__grid">
            {SERVICES_DATA.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onKnowMore={() => handleSelect(service)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </>
  );
};

export default Services;
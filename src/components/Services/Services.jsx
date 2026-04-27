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

  /* ===== NEW SERVICES ADDED ===== */

  {
    id: 5,
    icon: "fas fa-wave-square",
    title: "Pure Tone Audiometry",
    category: "Diagnostic Service",
    image: null,
    description:
      "Pure Tone Audiometry measures hearing sensitivity across different frequencies and helps identify the degree and type of hearing loss accurately.",
    shortFeatures: [
      "Hearing threshold test",
      "Detailed audiogram",
      "Adult & child-friendly",
      "Accurate diagnosis",
    ],
  },
  {
    id: 6,
    icon: "fas fa-comment-dots",
    title: "Speech Audiometry",
    category: "Diagnostic Service",
    image: null,
    description:
      "Speech Audiometry evaluates how clearly you can hear and understand spoken words in real-world listening situations.",
    shortFeatures: [
      "Speech clarity test",
      "Word recognition",
      "Supports hearing aid fitting",
      "Real-life listening insight",
    ],
  },
  {
    id: 7,
    icon: "fas fa-brain",
    title: "Auditory Brainstem Response (ABR)",
    category: "Advanced Diagnostic",
    image: null,
    description:
      "ABR is an objective hearing test that measures how the hearing nerve and brainstem respond to sound, ideal for infants and difficult-to-test patients.",
    shortFeatures: [
      "Objective hearing test",
      "Infant-friendly",
      "No active response needed",
      "Neural pathway analysis",
    ],
  },
  {
    id: 8,
    icon: "fas fa-eye",
    title: "Electronystagmography (ENG)",
    category: "Balance & Vestibular Test",
    image: null,
    description:
      "ENG records involuntary eye movements to assess the balance system and help diagnose vertigo, dizziness, and vestibular disorders.",
    shortFeatures: [
      "Vertigo evaluation",
      "Balance system check",
      "Eye movement recording",
      "Vestibular assessment",
    ],
  },
  {
    id: 9,
    icon: "fas fa-bolt",
    title: "Electrocochleography (ECoG)",
    category: "Advanced Diagnostic",
    image: null,
    description:
      "ECoG is an advanced objective inner ear test used to assess cochlear and auditory nerve function, especially in suspected Ménière’s disease.",
    shortFeatures: [
      "Cochlear function test",
      "Inner ear assessment",
      "Ménière’s support",
      "Objective measurement",
    ],
  },
  {
    id: 10,
    icon: "fas fa-sliders",
    title: "Vestibular Evoked Myogenic Potential (VEMP)",
    category: "Balance & Vestibular Test",
    image: null,
    description:
      "VEMP is a specialised vestibular test that evaluates balance organ pathways through sound-triggered muscle response recordings.",
    shortFeatures: [
      "Vestibular pathway test",
      "Objective balance test",
      "Dizziness support",
      "Advanced vestibular assessment",
    ],
  },
  {
    id: 11,
    icon: "fas fa-volume-down",
    title: "Otoacoustic Emission (OAE)",
    category: "Diagnostic Service",
    image: null,
    description:
      "OAE is a quick, painless, and objective test used to assess inner ear cochlear function, especially useful for newborn and pediatric screening.",
    shortFeatures: [
      "Quick screening",
      "Newborn-friendly",
      "Non-invasive",
      "Cochlear function check",
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
            subtitle="Comprehensive hearing, speech, rehabilitation, vestibular, and advanced diagnostic services designed to deliver accurate diagnosis, personalised care, and long-term support for every age group."
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
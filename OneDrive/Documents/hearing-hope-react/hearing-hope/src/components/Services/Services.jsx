import React, { useState } from "react";
import "./Services.css";
import { SERVICES } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";
import ServiceDetail from "./Servicedetails";

const ServiceCard = ({ icon, title, description, onKnowMore }) => (
  <div className="service-card">
    <div className="service-card__icon">
      <i className={icon}></i>
    </div>
    <h4 className="service-card__title">{title}</h4>
    <p className="service-card__desc">{description}</p>
    <button className="know-more know-more--btn" onClick={onKnowMore}>
      Know More <i className="fas fa-arrow-right"></i>
    </button>
  </div>
);

const Services = ({ onServiceSelect }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleSelect = (svc) => {
    setSelectedService(svc);
    if (onServiceSelect) onServiceSelect(svc);
  };

  return (
    <>
      <section className="services" id="services">
        <div className="container">
          <SectionHeader
            tag="What We Offer"
            title="Our Services"
            subtitle="Comprehensive hearing care solutions tailored to your unique needs, delivered by certified professionals."
          />
          <div className="services__grid">
            {SERVICES.map((s) => (
              <ServiceCard
                key={s.id}
                {...s}
                onKnowMore={() => handleSelect(s)}
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
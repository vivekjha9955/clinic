import React, { useEffect } from "react";
import "./OccupationalTherapySection.css";

const OT_DETAILS = {
  subtitle:
    "Personalised sensory, motor, behavioural and functional development support",
  description: [
    "Occupational therapy is a specialised therapeutic service that helps children improve sensory processing, attention, coordination, fine motor abilities, self-care, and participation in everyday activities at home, school, and social settings.",
    "At Indian Speech & Hearing Clinic, our occupational therapy sessions are tailored according to developmental needs, sensory profile, behaviour patterns, learning challenges, and functional goals. We focus on structured, practical, and measurable improvement in independence and daily performance.",
  ],
  badges: [
    "1:1 Expert Sessions",
    "Child-Centred Therapy",
    "Parent Guidance",
    "Goal-Based Progress Tracking",
  ],
  whoNeedsIt: [
    "Children with sensory processing difficulties",
    "Children with delayed fine motor development",
    "Children with poor hand-eye coordination",
    "Children with attention and behavioural regulation challenges",
    "Children struggling with self-care or daily routines",
    "Children with developmental delays or autism support needs",
  ],
  conditions: [
    "Sensory Processing Disorder",
    "Autism Spectrum Disorder Support",
    "ADHD / Attention Difficulties",
    "Fine Motor Delay",
    "Handwriting Difficulty",
    "Poor Balance & Coordination",
    "Motor Planning Challenges",
    "Delayed Self-Care Skills",
  ],
  symptoms: [
    "Difficulty holding pencil or crayons properly",
    "Poor handwriting or weak hand control",
    "Easily distracted or unable to sit for tasks",
    "Sensitivity to sounds, touch, textures, or movement",
    "Poor balance, clumsiness, or frequent falls",
    "Difficulty dressing, feeding, buttoning, or using utensils",
  ],
  benefits: [
    "Improves sensory regulation and body awareness",
    "Builds fine motor strength and coordination",
    "Supports handwriting and classroom readiness",
    "Improves focus, attention, and task participation",
    "Enhances independence in self-care activities",
    "Boosts confidence in daily routines and learning",
  ],
  steps: [
    {
      num: "01",
      title: "Detailed Functional Assessment",
      desc: "We assess sensory processing, fine motor skills, coordination, attention, behaviour, and independence in daily tasks.",
    },
    {
      num: "02",
      title: "Therapy Goal Planning",
      desc: "A personalised occupational therapy plan is created based on the child’s developmental profile and practical daily challenges.",
    },
    {
      num: "03",
      title: "Structured 1:1 Therapy Sessions",
      desc: "Sessions focus on sensory integration, motor skills, balance, attention, self-care, handwriting, and school-readiness goals.",
    },
    {
      num: "04",
      title: "Parent Training & Home Strategies",
      desc: "We guide parents with practical home activities and routines to continue progress beyond clinic sessions.",
    },
    {
      num: "05",
      title: "Progress Monitoring",
      desc: "Regular review ensures measurable improvement and therapy updates based on changing developmental needs.",
    },
  ],
};

const OccupationalTherapyDetail = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ occupationalTherapyDetail: true }, "");

    const handlePopState = () => onClose();
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClose = () => {
    if (
      window.history.state &&
      window.history.state.occupationalTherapyDetail
    ) {
      window.history.back();
    } else {
      onClose();
    }
  };

  return (
    <div className="ot-detail-page">
      {/* Header */}
      <div className="ot-detail-header">
        <div className="container ot-detail-header__inner">
          <button className="ot-detail-back" onClick={handleClose}>
            <i className="fas fa-arrow-left"></i> Back
          </button>

          <div className="ot-detail-header__content">
            <div className="ot-detail-header__icon">
              <i className="fas fa-hands-helping"></i>
            </div>

            <div>
              <h1 className="ot-detail-header__title">Occupational Therapy</h1>
              <p className="ot-detail-header__sub">{OT_DETAILS.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="ot-detail-body">
        <div className="container">
          {/* Overview */}
          <div className="ot-detail-overview">
            <div className="ot-detail-overview__text">
              <span className="ot-detail-tag">About This Therapy</span>
              <h2 className="ot-detail-overview__title">
                Occupational Therapy at Indian Speech &amp; Hearing Clinic
              </h2>

              {OT_DETAILS.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="ot-detail-overview__badges">
                {OT_DETAILS.badges.map((badge, i) => (
                  <span key={i} className="ot-detail-overview__badge">
                    <i className="fas fa-check-circle"></i> {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="ot-detail-overview__visual">
              <div className="ot-detail-overview__icon-circle">
                <i className="fas fa-hands-helping"></i>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="ot-detail-info-grid">
            <div className="ot-info-box">
              <h3>Who Needs Occupational Therapy?</h3>
              <ul>
                {OT_DETAILS.whoNeedsIt.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ot-info-box">
              <h3>Conditions We Help With</h3>
              <ul>
                {OT_DETAILS.conditions.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ot-info-box">
              <h3>Common Symptoms</h3>
              <ul>
                {OT_DETAILS.symptoms.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ot-info-box">
              <h3>Benefits of Occupational Therapy</h3>
              <ul>
                {OT_DETAILS.benefits.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="ot-process-section">
            <div className="ot-process-header">
              <span className="ot-detail-tag">Our Process</span>
              <h2>How Occupational Therapy Works</h2>
              <p>
                Our structured occupational therapy process focuses on
                assessment, sensory and motor development, parent guidance, and
                measurable improvement in everyday functioning.
              </p>
            </div>

            <div className="ot-process-grid">
              {OT_DETAILS.steps.map((step, i) => (
                <div key={i} className="ot-process-card">
                  <div className="ot-process-card__num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="ot-detail-cta-banner">
            <div className="ot-detail-cta-banner__text">
              <h3>Need Occupational Therapy Consultation?</h3>
              <p>
                Book a consultation with our expert team and get a personalised
                therapy plan for better sensory regulation, motor development,
                attention, and daily independence.
              </p>
            </div>

            <a
              href="#contact"
              className="ot-detail-cta-banner__btn"
              onClick={handleClose}
            >
              <i className="fas fa-calendar-check"></i> Book Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OccupationalTherapyDetail;
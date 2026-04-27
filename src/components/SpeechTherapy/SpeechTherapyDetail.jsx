import React, { useEffect } from "react";
import "./SpeechTherapySection.css";

const SPEECH_DETAILS = {
  subtitle: "Personalised speech, language, fluency and communication support",
  description: [
    "Speech therapy is a specialised therapeutic service designed to help children and adults improve speech clarity, pronunciation, language understanding, fluency, voice quality, and overall communication confidence.",
    "At Indian Speech & Hearing Clinic, our speech therapy sessions are customised according to age, developmental stage, communication goals, and individual challenges. We focus on practical, structured, and measurable improvement in everyday communication.",
  ],
  badges: [
    "1:1 Expert Sessions",
    "Children & Adults",
    "Parent Guidance",
    "Personalised Therapy Plans",
  ],
  whoNeedsIt: [
    "Children with speech delay or unclear speech",
    "Children with language development difficulties",
    "Children with autism-related communication challenges",
    "Individuals with stammering / stuttering concerns",
    "Children with articulation or pronunciation issues",
    "Adults needing speech, language, or voice support",
  ],
  conditions: [
    "Speech Delay",
    "Language Delay",
    "Stammering / Stuttering",
    "Articulation Disorder",
    "Autism-related communication challenges",
    "Voice Disorders",
    "Social Communication Difficulties",
    "Pronunciation / clarity issues",
  ],
  symptoms: [
    "Late speaking milestones",
    "Unclear or difficult-to-understand speech",
    "Difficulty expressing needs or thoughts",
    "Poor pronunciation of words or sounds",
    "Repeating sounds or speech blocks",
    "Difficulty interacting socially through speech",
  ],
  benefits: [
    "Improves speech clarity and pronunciation",
    "Supports better language development",
    "Builds confidence in speaking",
    "Improves classroom and social participation",
    "Helps reduce communication frustration",
    "Encourages stronger daily interaction skills",
  ],
  steps: [
    {
      num: "01",
      title: "Detailed Assessment",
      desc: "We evaluate speech clarity, language level, fluency, communication patterns, and developmental concerns.",
    },
    {
      num: "02",
      title: "Goal Planning",
      desc: "A personalised therapy plan is created based on age, challenges, and communication goals.",
    },
    {
      num: "03",
      title: "1:1 Therapy Sessions",
      desc: "Structured sessions focus on speech sounds, language, fluency, social communication, and confidence.",
    },
    {
      num: "04",
      title: "Parent / Family Guidance",
      desc: "We provide home practice strategies so improvement continues beyond clinic sessions.",
    },
    {
      num: "05",
      title: "Progress Tracking",
      desc: "Regular review ensures measurable improvement and updates to the therapy plan when needed.",
    },
  ],
};

const SpeechTherapyDetail = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ speechTherapyDetail: true }, "");

    const handlePopState = () => onClose();
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClose = () => {
    if (window.history.state && window.history.state.speechTherapyDetail) {
      window.history.back();
    } else {
      onClose();
    }
  };

  return (
    <div className="speech-detail-page">
      {/* Header */}
      <div className="speech-detail-header">
        <div className="container speech-detail-header__inner">
          <button className="speech-detail-back" onClick={handleClose}>
            <i className="fas fa-arrow-left"></i> Back
          </button>

          <div className="speech-detail-header__content">
            <div className="speech-detail-header__icon">
              <i className="fas fa-comments"></i>
            </div>

            <div>
              <h1 className="speech-detail-header__title">Speech Therapy</h1>
              <p className="speech-detail-header__sub">
                {SPEECH_DETAILS.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="speech-detail-body">
        <div className="container">
          {/* Overview */}
          <div className="speech-detail-overview">
            <div className="speech-detail-overview__text">
              <span className="speech-detail-tag">About This Therapy</span>
              <h2 className="speech-detail-overview__title">
                Speech Therapy at Indian Speech &amp; Hearing Clinic
              </h2>

              {SPEECH_DETAILS.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}

              <div className="speech-detail-overview__badges">
                {SPEECH_DETAILS.badges.map((badge, i) => (
                  <span key={i} className="speech-detail-overview__badge">
                    <i className="fas fa-check-circle"></i> {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="speech-detail-overview__visual">
              <div className="speech-detail-overview__icon-circle">
                <i className="fas fa-comments"></i>
              </div>
            </div>
          </div>

          {/* Info Grid */}
          <div className="speech-detail-info-grid">
            <div className="speech-info-box">
              <h3>Who Needs Speech Therapy?</h3>
              <ul>
                {SPEECH_DETAILS.whoNeedsIt.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="speech-info-box">
              <h3>Conditions We Help With</h3>
              <ul>
                {SPEECH_DETAILS.conditions.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="speech-info-box">
              <h3>Common Symptoms</h3>
              <ul>
                {SPEECH_DETAILS.symptoms.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="speech-info-box">
              <h3>Benefits of Speech Therapy</h3>
              <ul>
                {SPEECH_DETAILS.benefits.map((item, i) => (
                  <li key={i}>
                    <i className="fas fa-check-circle"></i>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Process */}
          <div className="speech-process-section">
            <div className="speech-process-header">
              <span className="speech-detail-tag">Our Process</span>
              <h2>How Speech Therapy Works</h2>
              <p>
                Our structured therapy process focuses on assessment,
                personalised planning, practical sessions, and measurable
                communication improvement.
              </p>
            </div>

            <div className="speech-process-grid">
              {SPEECH_DETAILS.steps.map((step, i) => (
                <div key={i} className="speech-process-card">
                  <div className="speech-process-card__num">{step.num}</div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="speech-detail-cta-banner">
            <div className="speech-detail-cta-banner__text">
              <h3>Need Speech Therapy Consultation?</h3>
              <p>
                Book a consultation with our expert team and get a personalised
                therapy plan for better speech, language, and communication
                confidence.
              </p>
            </div>

            <a
              href="#contact"
              className="speech-detail-cta-banner__btn"
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

export default SpeechTherapyDetail;
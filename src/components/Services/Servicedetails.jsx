import React, { useEffect } from "react";
import "./Servicedetail.css";

import hearingTestImg from "../../assets/hearingtest.png";
import hearingAidImg from "../../assets/hearingaid.png";
import speechTherapyImg from "../../assets/speechtherapy.png";
import hearingCareImg from "../../assets/hearingcare.png";

const SERVICE_IMAGES = {
  "Hearing Test": hearingTestImg,
  "Hearing Aid": hearingAidImg,
  "Speech Therapy": speechTherapyImg,
  "Hearing Care": hearingCareImg,
};

const SERVICE_DETAILS = {
  "Hearing Test": {
    subtitle: "Accurate & comprehensive audiometric evaluation",
    overviewTitle: "Professional Hearing Assessment for All Age Groups",
    description: [
      "A hearing test is the first and most important step in identifying hearing difficulties and planning the right treatment. At Indian Speech & Hearing Clinic, we perform detailed audiometric evaluations using advanced, calibrated diagnostic equipment in a comfortable clinical environment.",
      "Our qualified audiologists assess your hearing sensitivity across a full range of frequencies and explain the results in simple language. Whether you are noticing difficulty hearing conversations, struggling in noisy environments, or seeking a routine check-up, we provide a precise diagnosis and clear next steps.",
    ],
    badges: [
      "Non-invasive & painless",
      "Advanced audiometric equipment",
      "Certified audiologists",
      "Detailed audiogram report",
    ],
    highlights: [
      {
        icon: "fas fa-wave-square",
        title: "Accurate Diagnosis",
        desc: "We identify the degree and type of hearing loss with clinical precision.",
      },
      {
        icon: "fas fa-file-waveform",
        title: "Audiogram Report",
        desc: "You receive a clear hearing report that helps guide treatment decisions.",
      },
      {
        icon: "fas fa-user-doctor",
        title: "Expert Counselling",
        desc: "Our audiologists explain your results and recommend the best next step.",
      },
      {
        icon: "fas fa-clock",
        title: "Quick Process",
        desc: "Most standard hearing assessments are completed efficiently and comfortably.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Case History",
        desc: "We begin by understanding your hearing concerns, medical history, and daily listening challenges.",
      },
      {
        num: "02",
        title: "Otoscopy",
        desc: "A visual inspection of the ear canal and eardrum helps rule out wax blockage or infection.",
      },
      {
        num: "03",
        title: "Pure Tone Audiometry",
        desc: "You listen to tones at different frequencies and volumes to determine your hearing thresholds.",
      },
      {
        num: "04",
        title: "Speech Testing",
        desc: "We assess how clearly you hear and understand speech at different listening levels.",
      },
      {
        num: "05",
        title: "Results & Guidance",
        desc: "Your audiologist explains the audiogram and discusses suitable treatment or hearing aid options.",
      },
    ],
    whoFor: [
      "Adults experiencing difficulty hearing speech clearly",
      "Senior citizens with age-related hearing changes",
      "Children needing baseline or follow-up hearing checks",
      "Patients with tinnitus, ear fullness, or imbalance concerns",
      "People exposed to noise at work or in daily life",
      "Anyone planning to purchase or upgrade a hearing aid",
    ],
    ctaTitle: "Concerned About Your Hearing?",
    ctaText:
      "Book a professional hearing evaluation and get expert guidance from our experienced audiologists. Early diagnosis leads to better outcomes and better hearing confidence.",
  },

  "Hearing Aid": {
    subtitle: "Custom-fitted hearing aids from leading global brands",
    overviewTitle: "Advanced Hearing Aid Solutions Tailored to Your Lifestyle",
    description: [
      "We provide a complete hearing aid solution — from consultation and brand selection to fitting, programming, trial, and after-sales care. At Indian Speech & Hearing Clinic, we work with leading global brands to ensure every patient receives the most suitable device for their hearing profile, comfort needs, and budget.",
      "Our hearing aids are professionally programmed according to your audiogram, ensuring clear sound, improved speech understanding, and long-term comfort. We also offer device orientation, maintenance guidance, fine-tuning, and regular follow-up visits so you continue to get the best performance from your hearing aid.",
    ],
    badges: [
      "Top global brands",
      "Custom programming",
      "Trial period available",
      "Long-term support",
    ],
    highlights: [
      {
        icon: "fas fa-ear-listen",
        title: "Personalised Selection",
        desc: "We recommend the right style and technology based on your hearing and lifestyle.",
      },
      {
        icon: "fas fa-sliders",
        title: "Precise Programming",
        desc: "Every device is fine-tuned according to your audiogram for optimal clarity.",
      },
      {
        icon: "fas fa-mobile-screen-button",
        title: "Modern Features",
        desc: "Many models include Bluetooth, rechargeability, noise reduction, and app control.",
      },
      {
        icon: "fas fa-screwdriver-wrench",
        title: "After-Sales Care",
        desc: "We provide cleaning, adjustments, maintenance, and regular performance checks.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Hearing Evaluation",
        desc: "A detailed hearing assessment helps us understand your exact hearing profile.",
      },
      {
        num: "02",
        title: "Device Recommendation",
        desc: "We suggest the most suitable hearing aid style, technology level, and brand.",
      },
      {
        num: "03",
        title: "Trial & Demo",
        desc: "You can experience the hearing aid in real-life situations before finalising your choice.",
      },
      {
        num: "04",
        title: "Custom Fitting",
        desc: "The hearing aid is professionally fitted and programmed for your comfort and hearing needs.",
      },
      {
        num: "05",
        title: "Follow-up Fine Tuning",
        desc: "We schedule follow-ups to refine sound quality and ensure maximum satisfaction.",
      },
    ],
    whoFor: [
      "People with mild to profound hearing loss",
      "Patients who struggle in conversations or noisy places",
      "Seniors needing comfortable daily hearing support",
      "Professionals who need better speech clarity in meetings",
      "Users upgrading from older hearing aid technology",
      "First-time hearing aid users needing expert guidance",
    ],
    ctaTitle: "Looking for the Right Hearing Aid?",
    ctaText:
      "Visit our clinic for a personalised hearing aid consultation, live demo, and professional fitting. We help you choose the best device for clear, confident hearing every day.",
  },

  "Speech Therapy": {
    subtitle: "Personalised speech & language therapy for children and adults",
    overviewTitle: "Supportive Therapy for Clearer Speech and Better Communication",
    description: [
      "Our speech therapy services are designed to help children and adults overcome communication challenges and improve speech clarity, language skills, fluency, and confidence. Therapy is provided by trained professionals in a supportive and structured environment.",
      "We work with a wide range of concerns including delayed speech development, articulation difficulties, stammering, voice issues, language delays, and communication challenges related to hearing loss. Each therapy plan is personalised, goal-oriented, and built around measurable progress.",
    ],
    badges: [
      "All age groups",
      "Certified therapists",
      "Evidence-based methods",
      "Family guidance included",
    ],
    highlights: [
      {
        icon: "fas fa-child-reaching",
        title: "Child Development Support",
        desc: "Early therapy helps children build strong speech and language foundations.",
      },
      {
        icon: "fas fa-comments",
        title: "Communication Confidence",
        desc: "Therapy improves everyday speaking, listening, and social interaction skills.",
      },
      {
        icon: "fas fa-house",
        title: "Family Involvement",
        desc: "Parents and caregivers receive guidance to support progress at home.",
      },
      {
        icon: "fas fa-chart-line",
        title: "Progress Tracking",
        desc: "We regularly review goals and adjust therapy strategies for better outcomes.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Initial Assessment",
        desc: "We evaluate speech, language, voice, fluency, and communication skills in detail.",
      },
      {
        num: "02",
        title: "Goal Planning",
        desc: "Therapy goals are defined based on the patient’s needs, age, and communication challenges.",
      },
      {
        num: "03",
        title: "Therapy Sessions",
        desc: "Structured sessions use personalised techniques and evidence-based exercises.",
      },
      {
        num: "04",
        title: "Home Practice Plan",
        desc: "Families receive exercises and strategies to continue practice outside the clinic.",
      },
      {
        num: "05",
        title: "Progress Review",
        desc: "We track improvements regularly and refine therapy goals as progress develops.",
      },
    ],
    whoFor: [
      "Children with delayed speech or unclear pronunciation",
      "Children with language comprehension or expression difficulties",
      "People with stammering or fluency concerns",
      "Individuals with voice disorders or vocal strain",
      "Patients with communication issues related to hearing loss",
      "Adults recovering communication skills after medical conditions",
    ],
    ctaTitle: "Need Speech or Language Support?",
    ctaText:
      "Our personalised speech therapy programs help patients communicate more clearly and confidently. Book an assessment and start a structured path toward better speech and language skills.",
  },

  "Hearing Care": {
    subtitle: "Complete long-term hearing wellness and rehabilitation support",
    overviewTitle: "Holistic Hearing Care Beyond Diagnosis and Devices",
    description: [
      "Hearing care is not only about diagnosis or hearing aids — it is about long-term hearing wellness. At Indian Speech & Hearing Clinic, we provide complete hearing care support including counselling, hearing protection guidance, tinnitus support, hearing aid maintenance, and follow-up rehabilitation.",
      "Our goal is to help every patient enjoy better hearing in daily life through personalised care, regular monitoring, device optimisation, and practical strategies for communication. Whether you already use hearing aids or are just beginning your hearing journey, we remain your long-term care partner.",
    ],
    badges: [
      "Holistic hearing support",
      "Tinnitus guidance",
      "Device maintenance",
      "Ongoing monitoring",
    ],
    highlights: [
      {
        icon: "fas fa-shield-heart",
        title: "Preventive Care",
        desc: "We help you protect and preserve your hearing with practical lifestyle advice.",
      },
      {
        icon: "fas fa-volume-high",
        title: "Tinnitus Guidance",
        desc: "Supportive counselling and hearing strategies for ringing or buzzing concerns.",
      },
      {
        icon: "fas fa-toolbox",
        title: "Device Maintenance",
        desc: "Regular cleaning, checks, and adjustments keep your hearing aids performing well.",
      },
      {
        icon: "fas fa-people-group",
        title: "Rehabilitation Support",
        desc: "We help you adapt to better hearing through counselling and listening strategies.",
      },
    ],
    steps: [
      {
        num: "01",
        title: "Consultation",
        desc: "We understand your hearing history, device usage, and current hearing challenges.",
      },
      {
        num: "02",
        title: "Assessment",
        desc: "A full review of your hearing status and device performance is conducted.",
      },
      {
        num: "03",
        title: "Personalised Care Plan",
        desc: "We design a hearing care plan covering support, maintenance, and communication advice.",
      },
      {
        num: "04",
        title: "Ongoing Device Support",
        desc: "Your hearing aid settings, comfort, and performance are checked and optimised regularly.",
      },
      {
        num: "05",
        title: "Long-Term Follow-Up",
        desc: "Regular visits help track progress and keep your hearing support aligned with your needs.",
      },
    ],
    whoFor: [
      "Existing hearing aid users needing regular support",
      "Patients with tinnitus or listening fatigue",
      "Individuals adjusting to newly fitted hearing aids",
      "Seniors who need long-term hearing wellness monitoring",
      "People exposed to noisy work or environments",
      "Anyone who wants proactive hearing protection and care",
    ],
    ctaTitle: "Need Ongoing Hearing Support?",
    ctaText:
      "From counselling to device care and hearing rehabilitation, our clinic provides complete long-term hearing care to help you stay confident, comfortable, and connected.",
  },
};

const ServiceDetail = ({ service, onClose }) => {
  const detail = SERVICE_DETAILS[service.title];
  const image = SERVICE_IMAGES[service.title];

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ serviceDetail: true }, "");

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
    if (window.history.state && window.history.state.serviceDetail) {
      window.history.back();
    } else {
      onClose();
    }
  };

  if (!detail) return null;

  return (
    <div className="service-detail-page">
      {/* Header */}
      <div className="svc-header">
        <div className="svc-header__inner">
          <button className="svc-back" onClick={handleClose}>
            <i className="fas fa-arrow-left"></i> Back
          </button>

          <div className="svc-header__content">
            <div className="svc-header__icon">
              <i className={service.icon}></i>
            </div>
            <div>
              <h1 className="svc-header__title">{service.title}</h1>
              <p className="svc-header__sub">{detail.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="svc-body">
        <div className="container">
          {/* Overview */}
          <section className="svc-overview">
            <div className="svc-overview__text">
              <span className="svc-overview__tag">Service Overview</span>
              <h2 className="svc-overview__title">{detail.overviewTitle}</h2>

              {detail.description.map((para, index) => (
                <p key={index}>{para}</p>
              ))}

              <div className="svc-overview__badges">
                {detail.badges.map((badge, index) => (
                  <span key={index} className="svc-overview__badge">
                    <i className="fas fa-circle-check"></i> {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="svc-overview__img">
              {image ? (
                <img
                  src={image}
                  alt={service.title}
                  className="svc-overview__real-img"
                />
              ) : (
                <i className={service.icon}></i>
              )}
            </div>
          </section>

          {/* Highlights */}
          <section className="svc-highlights">
            <div className="section-tag">Why Choose This Service</div>
            <h2 className="section-title">Key Benefits & Highlights</h2>
            <p className="section-subtitle">
              Designed to provide accurate diagnosis, personalised care, and
              better long-term outcomes for your hearing and communication
              health.
            </p>

            <div className="svc-highlights__grid">
              {detail.highlights.map((item, index) => (
                <div className="svc-highlight-card" key={index}>
                  <div className="svc-highlight-card__icon">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="svc-highlight-card__title">{item.title}</h3>
                  <p className="svc-highlight-card__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Steps */}
          <section className="svc-steps">
            <div className="section-tag">What To Expect</div>
            <h2 className="section-title">Our Step-by-Step Process</h2>
            <p className="section-subtitle">
              Every service follows a professional, patient-friendly process so
              you feel informed, comfortable, and supported at every stage.
            </p>

            <div className="svc-steps__grid">
              {detail.steps.map((step, index) => (
                <div className="svc-step-card" key={index}>
                  <div className="svc-step-card__num">{step.num}</div>
                  <h3 className="svc-step-card__title">{step.title}</h3>
                  <p className="svc-step-card__desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who is it for */}
          <section className="svc-who">
            <h2 className="svc-who__title">Who Is This Service For?</h2>
            <ul className="svc-who__list">
              {detail.whoFor.map((item, index) => (
                <li key={index}>
                  <i className="fas fa-circle-check"></i>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* CTA */}
          <section className="svc-cta">
            <div className="svc-cta__text">
              <h3>{detail.ctaTitle}</h3>
              <p>{detail.ctaText}</p>
            </div>

            <a href="#contact" className="svc-cta__btn" onClick={handleClose}>
              Book Appointment <i className="fas fa-arrow-right"></i>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
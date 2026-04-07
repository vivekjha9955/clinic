import React, { useEffect } from "react";
import "./Servicedetail.css";

// Rich content per service
const SERVICE_DETAILS = {
  "Hearing Test": {
    subtitle: "Accurate & comprehensive audiometric evaluation",
    description: [
      "A hearing test, or audiometric evaluation, is the first and most important step in addressing any hearing concern. At Indian Speech & Hearing Clinic, our qualified audiologists use state-of-the-art diagnostic equipment to assess your hearing across a full range of frequencies.",
      "The test is completely painless and non-invasive. Results are plotted on an audiogram — a graph that shows your hearing thresholds — which helps us recommend the most appropriate treatment or hearing aid.",
    ],
    badges: ["Non-invasive & painless", "Advanced equipment", "Certified audiologists", "Results in 30 minutes"],
    steps: [
      { num: "01", title: "Case History", desc: "We begin by understanding your hearing concerns, medical history, and lifestyle needs." },
      { num: "02", title: "Otoscopy", desc: "A visual inspection of your ear canal and eardrum to rule out wax or infection." },
      { num: "03", title: "Pure Tone Audiometry", desc: "You listen to tones at different volumes and frequencies and indicate when you hear them." },
      { num: "04", title: "Speech Audiometry", desc: "We assess how well you understand speech at various volume levels." },
      { num: "05", title: "Results & Counselling", desc: "Your audiologist explains the audiogram and recommends the best next steps for you." },
    ],
  },
  "Hearing Aid": {
    subtitle: "Custom-fitted hearing aids from the world's leading brands",
    description: [
      "We offer a comprehensive hearing aid fitting service that goes far beyond simply selling a device. Our audiologists assess your hearing loss, lifestyle, and preferences to recommend the most suitable hearing aid from top global brands including Signia, Phonak, Oticon, Widex, ReSound, Starkey, and Unitron.",
      "Every hearing aid is professionally programmed and fine-tuned to your specific audiogram. We provide hands-on training, ongoing follow-up care, and adjustments to ensure you get the best possible hearing experience.",
    ],
    badges: ["All leading brands", "Custom programming", "Trial period available", "After-sales support"],
    steps: [
      { num: "01", title: "Hearing Evaluation", desc: "A detailed audiogram is conducted to understand your exact hearing profile." },
      { num: "02", title: "Device Selection", desc: "Our audiologist recommends the best hearing aid style and brand for your needs and budget." },
      { num: "03", title: "Trial Period", desc: "You get to try the hearing aid in real-world environments before committing to a purchase." },
      { num: "04", title: "Custom Fitting", desc: "The device is professionally fitted and programmed to your audiogram for optimal sound." },
      { num: "05", title: "Follow-up Care", desc: "We schedule follow-up visits to fine-tune settings and ensure your satisfaction." },
    ],
  },
  "Speech Therapy": {
    subtitle: "Expert speech & language therapy for all ages",
    description: [
      "Our certified Speech-Language Pathologists (SLPs) provide assessment and therapy for a wide range of communication disorders in children and adults. This includes delayed speech development, stuttering, voice disorders, articulation problems, and language processing difficulties.",
      "Therapy sessions are personalised, evidence-based, and conducted in a warm, encouraging environment. We work closely with families to ensure therapy strategies are carried over into daily life for faster progress.",
    ],
    badges: ["All age groups", "Certified SLPs", "Evidence-based therapy", "Family involvement"],
    steps: [
      { num: "01", title: "Initial Assessment", desc: "A comprehensive evaluation of speech, language, voice, and fluency abilities." },
      { num: "02", title: "Goal Setting", desc: "Individualised therapy goals are set in consultation with the patient and family." },
      { num: "03", title: "Therapy Sessions", desc: "Regular one-on-one sessions using proven techniques tailored to the patient." },
      { num: "04", title: "Home Programme", desc: "Exercises and strategies for practice at home to accelerate progress." },
      { num: "05", title: "Progress Review", desc: "Regular reviews to track improvement and update therapy goals." },
    ],
  },
  "Hearing Care": {
    subtitle: "Complete, ongoing hearing wellness support",
    description: [
      "Our hearing care programme provides holistic support for patients with all degrees of hearing loss. From initial consultation and diagnosis through to ongoing device maintenance, counselling, and aural rehabilitation, we are with you every step of the way.",
      "We also offer tinnitus management, auditory training, and preventive hearing care advice to help you protect and preserve your hearing for the long term.",
    ],
    badges: ["Holistic approach", "Tinnitus management", "Aural rehabilitation", "Preventive care"],
    steps: [
      { num: "01", title: "Consultation", desc: "In-depth discussion of your hearing health history and current concerns." },
      { num: "02", title: "Diagnostic Testing", desc: "Full audiometric assessment to understand your current hearing status." },
      { num: "03", title: "Personalised Plan", desc: "A tailored hearing care plan covering devices, therapy, and lifestyle advice." },
      { num: "04", title: "Device Support", desc: "Professional fitting, programming, and maintenance of your hearing aid." },
      { num: "05", title: "Ongoing Monitoring", desc: "Regular check-ups to monitor your hearing health and update your care plan." },
    ],
  },
  "ENT Services": {
    subtitle: "Specialist ear, nose & throat evaluation and care",
    description: [
      "Our clinic provides specialist ENT-related audiological services, with referral networks to trusted ENT consultants in Ranchi. We evaluate ear conditions including otitis media, Eustachian tube dysfunction, eardrum perforations, and other conditions that can affect hearing.",
      "Early diagnosis and treatment of ENT conditions is critical to preventing permanent hearing loss. Our team works in coordination with ENT specialists to provide seamless, comprehensive ear care.",
    ],
    badges: ["Specialist network", "Ear condition diagnosis", "Coordinated care", "Prompt referrals"],
    steps: [
      { num: "01", title: "Symptom Assessment", desc: "Detailed review of your ear, nose, and throat symptoms." },
      { num: "02", title: "Otoscopy & Tympanometry", desc: "Physical examination of the ear canal, eardrum, and middle ear pressure." },
      { num: "03", title: "Audiological Tests", desc: "Hearing tests to identify the impact of any ENT condition on your hearing." },
      { num: "04", title: "ENT Referral", desc: "Referral to our network of specialist ENT consultants when required." },
      { num: "05", title: "Post-treatment Follow-up", desc: "Hearing re-evaluation after ENT treatment to assess recovery." },
    ],
  },
  "Pure Tone Audiometry": {
    subtitle: "Gold-standard hearing threshold test",
    description: [
      "Pure Tone Audiometry (PTA) is the internationally recognised gold-standard test for measuring hearing sensitivity. It determines the softest sound you can hear at various frequencies in both ears, producing an audiogram that serves as the foundation for all hearing care decisions.",
      "Our clinic uses calibrated audiometers in sound-treated booths to ensure accurate and reproducible results, meeting the standards required for medical and legal purposes.",
    ],
    badges: ["Calibrated equipment", "Sound-treated booth", "Both ears tested", "Medically accepted report"],
    steps: [
      { num: "01", title: "Preparation", desc: "You are seated in a sound-treated booth and fitted with calibrated headphones." },
      { num: "02", title: "Frequency Testing", desc: "Tones from 250 Hz to 8000 Hz are presented at varying volumes to each ear." },
      { num: "03", title: "Bone Conduction", desc: "A bone oscillator tests the inner ear directly to identify the type of hearing loss." },
      { num: "04", title: "Audiogram Plotting", desc: "Results are plotted on an audiogram showing your hearing thresholds." },
      { num: "05", title: "Report & Counselling", desc: "You receive a detailed report and expert counselling on the findings." },
    ],
  },
  "BERA Test": {
    subtitle: "Brainstem Evoked Response Audiometry",
    description: [
      "BERA (Brainstem Evoked Response Audiometry), also known as ABR (Auditory Brainstem Response), is an objective hearing test that measures the brain's electrical response to sound stimuli. It is used for newborn screening, infants, young children, and adults who cannot participate in standard hearing tests.",
      "BERA is also used to diagnose retrocochlear pathologies, auditory neuropathy, and neurological conditions affecting the auditory pathway. The test is painless and does not require any active participation from the patient.",
    ],
    badges: ["Objective test", "Suitable for all ages", "Newborn screening", "Neurological evaluation"],
    steps: [
      { num: "01", title: "Electrode Placement", desc: "Small electrodes are gently placed on the scalp and earlobes to record brain signals." },
      { num: "02", title: "Sound Stimulation", desc: "Click or tone-burst sounds are delivered through insert earphones." },
      { num: "03", title: "Brain Response Recording", desc: "The equipment records the brain's electrical response waveforms to each sound." },
      { num: "04", title: "Threshold Estimation", desc: "The softest sound producing a clear brain response estimates the hearing threshold." },
      { num: "05", title: "Report Interpretation", desc: "Results are analysed and a comprehensive report is provided for medical use." },
    ],
  },
  "OAE Test": {
    subtitle: "Otoacoustic Emissions testing for cochlear health",
    description: [
      "The OAE (Otoacoustic Emissions) test is a quick, painless, and objective test of cochlear (inner ear) function. When the inner ear receives sound, it produces faint sounds in response called otoacoustic emissions. The presence of these emissions indicates healthy outer hair cell function.",
      "OAE testing is widely used for newborn hearing screening, monitoring hearing in patients receiving ototoxic medications, and as part of a comprehensive audiological evaluation battery.",
    ],
    badges: ["Quick & painless", "Newborn compatible", "Cochlear health check", "Objective result"],
    steps: [
      { num: "01", title: "Probe Insertion", desc: "A soft probe tip connected to the OAE device is gently placed in the ear canal." },
      { num: "02", title: "Sound Delivery", desc: "The device delivers a series of brief sounds into the ear canal." },
      { num: "03", title: "Emission Recording", desc: "The device's microphone captures the ear's otoacoustic emissions in response." },
      { num: "04", title: "Pass/Refer Result", desc: "A 'Pass' indicates normal outer hair cell function; 'Refer' indicates further testing is needed." },
      { num: "05", title: "Counselling", desc: "Results are explained and next steps recommended based on the outcome." },
    ],
  },
};

const ServiceDetail = ({ service, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const detail = SERVICE_DETAILS[service.title] || {
    subtitle: service.description,
    description: [service.description],
    badges: ["Professional care", "Expert team", "State-of-the-art equipment"],
    steps: [],
  };

  return (
    <div className="service-detail-page">
      {/* Header */}
      <div className="svc-header">
        <div className="svc-header__inner">
          <button className="svc-back" onClick={onClose}>
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
          <div className="svc-overview">
            <div className="svc-overview__text">
              <span className="svc-overview__tag">About This Service</span>
              <h2 className="svc-overview__title">{service.title} at Indian Speech &amp; Hearing Clinic</h2>
              {detail.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              <div className="svc-overview__badges">
                {detail.badges.map((b, i) => (
                  <span key={i} className="svc-overview__badge">
                    <i className="fas fa-check-circle"></i> {b}
                  </span>
                ))}
              </div>
            </div>
            <div className="svc-overview__img">
              <i className={service.icon}></i>
            </div>
          </div>

          {/* Steps */}
          {detail.steps.length > 0 && (
            <div className="svc-steps">
              <div className="section-header">
                <span className="section-tag">Process</span>
                <h2 className="section-title">What to Expect</h2>
                <div className="divider"></div>
              </div>
              <div className="svc-steps__grid">
                {detail.steps.map((step, i) => (
                  <div className="svc-step-card" key={i}>
                    <div className="svc-step-card__num">{step.num}</div>
                    <h3 className="svc-step-card__title">{step.title}</h3>
                    <p className="svc-step-card__desc">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA */}
          <div className="svc-cta">
            <div className="svc-cta__text">
              <h3>Ready to book your {service.title}?</h3>
              <p>Our expert team is ready to help. Book a free consultation today.</p>
            </div>
            <a href="#contact" className="svc-cta__btn" onClick={onClose}>
              <i className="fas fa-calendar-check"></i> Book Free Consultation
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
import React from "react";
import "./HearingImportance.css";

const importanceData = [
  {
    id: 1,
    icon: "fas fa-brain",
    title: "Brain Health",
    description:
      "Early hearing care may help reduce listening strain and support long-term cognitive wellness.",
  },
  {
    id: 2,
    icon: "fas fa-head-side-virus",
    title: "Mental Focus",
    description:
      "Better hearing keeps the brain actively engaged with conversations, sounds, and daily activities.",
  },
  {
    id: 3,
    icon: "fas fa-walking",
    title: "Balance & Safety",
    description:
      "Improved hearing awareness can help you stay alert to your surroundings and daily movement.",
  },
  {
    id: 4,
    icon: "fas fa-heart",
    title: "Emotional Wellness",
    description:
      "Better hearing helps reduce frustration, isolation, and stress while improving confidence.",
  },
];

const HearingImportance = () => {
  return (
    <section className="hearing-importance section">
      <div className="container">
        <div className="importance-header">
          <span className="importance-tag">HEARING HEALTH</span>
          <h2 className="importance-title">Why Early Hearing Care Matters</h2>

          <div className="importance-divider">
            <span></span>
            <i className="fas fa-wave-square"></i>
            <span></span>
          </div>

          <p className="importance-subtitle">
            Untreated hearing loss can affect communication, confidence, and
            overall well-being. Early diagnosis and timely hearing support can
            improve daily life and help reduce long-term challenges.
          </p>
        </div>

        <div className="importance-grid">
          {importanceData.map((item, index) => (
            <div
              className={`importance-card importance-card-${index + 1}`}
              key={item.id}
            >
              <div className="importance-icon">
                <i className={item.icon}></i>
              </div>

              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HearingImportance;
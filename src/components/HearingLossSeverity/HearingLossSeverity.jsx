import React from "react";
import "./HearingLossSeverity.css";
import hearingGradeImg from "../../assets/hearinggrade3_webp.jpg";

const severityLevels = [
  {
    id: 1,
    title: "Mild",
    range: "26 dB to 40 dB",
    width: "32%",
    className: "severity-mild",
  },
  {
    id: 2,
    title: "Moderate",
    range: "41 dB to 55 dB",
    width: "52%",
    className: "severity-moderate",
  },
  {
    id: 3,
    title: "Moderately Severe",
    range: "56 dB to 70 dB",
    width: "68%",
    className: "severity-mod-severe",
  },
  {
    id: 4,
    title: "Severe",
    range: "71 dB to 90 dB",
    width: "86%",
    className: "severity-severe",
  },
  {
    id: 5,
    title: "Profound",
    range: "91 dB and Above",
    width: "100%",
    className: "severity-profound",
  },
];

const HearingLossSeverity = () => {
  return (
    <section className="hearing-loss-severity section">
      <div className="container">
        <div className="severity-header">
          <span className="severity-tag">HEARING ASSESSMENT</span>
          <h2 className="severity-title">
            Severity of <span>Hearing Loss</span>
          </h2>
          <p className="severity-subtitle">
            Hearing loss is measured in decibels (dB HL). Understanding the
            severity level helps identify the right hearing solution, treatment
            plan, and device recommendation for every patient.
          </p>
        </div>

        <div className="severity-layout">
          <div className="severity-image-card">
            <img src={hearingGradeImg} alt="Hearing Loss Severity Chart" />
          </div>

          <div className="severity-bars">
            {severityLevels.map((item) => (
              <div className="severity-row" key={item.id}>
                <div
                  className={`severity-bar ${item.className}`}
                  style={{ width: item.width }}
                >
                  <span className="severity-label">{item.title}</span>
                </div>
                <span className="severity-range">{item.range}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HearingLossSeverity;
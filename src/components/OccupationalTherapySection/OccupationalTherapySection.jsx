import React, { useState } from "react";
import "./OccupationalTherapySection.css";
import OccupationalTherapyDetail from "./OccupationalTherapyDetail";

const OccupationalTherapySection = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <section
        className="occupational-therapy-section section"
        id="occupational-therapy"
      >
        <div className="container">
          <div className="occupational-therapy-wrap">
            {/* Left Content */}
            <div className="occupational-therapy-content">
              <span className="occupational-therapy-tag">
                DEVELOPMENT & FUNCTIONAL CARE
              </span>

              <h2 className="occupational-therapy-title">
                Occupational Therapy for Better <span>Daily Independence</span>
              </h2>

              <p className="occupational-therapy-desc">
                Our occupational therapy services help children improve sensory
                processing, fine motor skills, attention, coordination,
                handwriting, self-care, and daily living abilities through
                structured, goal-based therapy plans.
              </p>

              <div className="occupational-therapy-highlights">
                <span>Sensory Integration Support</span>
                <span>Fine Motor Development</span>
                <span>Attention & Behaviour Support</span>
                <span>Daily Living Skills Training</span>
              </div>

              <button
                className="occupational-therapy-btn"
                onClick={() => setShowDetail(true)}
              >
                Read More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Right Card */}
            <div className="occupational-therapy-card">
              <div className="occupational-therapy-icon">
                <i className="fas fa-hands-helping"></i>
              </div>

              <h3>Occupational Therapy Program</h3>

              <p>
                Personalised sessions focused on improving sensory regulation,
                motor planning, coordination, attention, and independence in
                daily routines.
              </p>

              <div className="occupational-therapy-mini-list">
                <div>
                  <i className="fas fa-check-circle"></i> Sensory Integration
                  Training
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> Fine Motor Skill
                  Development
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> Handwriting & School
                  Readiness
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> Self-Care & Daily
                  Living Skills
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> Child-Focused
                  Structured Sessions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showDetail && (
        <OccupationalTherapyDetail onClose={() => setShowDetail(false)} />
      )}
    </>
  );
};

export default OccupationalTherapySection;
import React, { useState } from "react";
import "./SpeechTherapySection.css";
import SpeechTherapyDetail from "./SpeechTherapyDetail";

const SpeechTherapySection = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <section className="speech-therapy-section section" id="speech-therapy">
        <div className="container">
          <div className="speech-therapy-wrap">
            {/* Left Content */}
            <div className="speech-therapy-content">
              <span className="speech-therapy-tag">SPEECH & LANGUAGE CARE</span>

              <h2 className="speech-therapy-title">
                Speech Therapy for Better <span>Communication</span>
              </h2>

              <p className="speech-therapy-desc">
                Our speech therapy services help children and adults improve
                speech clarity, language development, fluency, social
                communication, and confidence in everyday interaction through
                personalised therapy plans.
              </p>

              <div className="speech-therapy-highlights">
                <span>Speech Delay Support</span>
                <span>Stammering Therapy</span>
                <span>Language Development</span>
                <span>Autism Communication Support</span>
              </div>

              <button
                className="speech-therapy-btn"
                onClick={() => setShowDetail(true)}
              >
                Read More <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            {/* Right Card */}
            <div className="speech-therapy-card">
              <div className="speech-therapy-icon">
                <i className="fas fa-comments"></i>
              </div>

              <h3>Speech Therapy Program</h3>

              <p>
                Personalised sessions to improve speech, language, voice,
                fluency, and everyday communication confidence.
              </p>

              <div className="speech-therapy-mini-list">
                <div>
                  <i className="fas fa-check-circle"></i> Speech Clarity Training
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> Social Communication Skills
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> 1:1 Focused Sessions
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> Kids + Adults Supported
                </div>
                <div>
                  <i className="fas fa-check-circle"></i> Goal-Based Progress Plan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {showDetail && (
        <SpeechTherapyDetail onClose={() => setShowDetail(false)} />
      )}
    </>
  );
};

export default SpeechTherapySection;
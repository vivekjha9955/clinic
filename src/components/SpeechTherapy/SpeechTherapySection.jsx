import React, { useState } from "react";
import "./SpeechTherapySection.css";
import SpeechTherapyDetail from "./SpeechTherapyDetail";

const SpeechTherapySection = () => {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <>
      <section className="speech-therapy-section section" id="speech-therapy">
        <div className="container">
          <div className="speech-therapy-wrap speech-therapy-wrap--full">
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
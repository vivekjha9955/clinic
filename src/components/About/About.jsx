import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__grid">
          {/* Image Side */}
          <div className="about__img-wrap">
            <div className="about__img-main">
              <i className="fas fa-hospital"></i>
            </div>
            <div className="about__badge">
              <span className="about__badge-num">17+</span>
              <span className="about__badge-label">Years of Experience</span>
            </div>
          </div>

          {/* Content Side */}
          <div className="about__content">
            <span className="section-tag">About Us</span>
            <h2 className="about__title">
              Best Hearing Care Clinic in Ranchi
            </h2>
            <p>
              Indian Speech &amp; Hearing Clinic, located at Arctic Mall, Bariatu Road,
              Ranchi, is Jharkhand's leading centre for hearing and speech care. Established
              over 17 years ago, we have built a reputation for clinical excellence,
              compassionate care, and lasting patient relationships.
            </p>
            <p>
              We are a <strong>Signia Certified Center</strong> and a proud unit of
              Hope Enterprises. Our clinic specialises in hearing evaluation, hearing
              aid fitting, and Speech &amp; Language therapy for patients of all ages —
              from newborns to the elderly. Our experienced team of qualified
              Audiologists and Speech-Language Pathologists uses world-class diagnostic
              equipment to deliver accurate assessments and personalised solutions.
            </p>
            <p>
              We offer home visit facilities, trial periods for hearing aids, and
              ongoing after-care — because we believe good hearing is not a luxury,
              it's a right. Our goal is to help every patient achieve better hearing,
              clearer speech, and a higher quality of life.
            </p>

            {/* Location */}
            <div className="about__location">
              <i className="fas fa-location-dot"></i>
              <div>
                <strong>Find Us Here</strong>
                <p>1st Floor, Arctic Mall, Bariatu Road, Ranchi – 834009, Jharkhand</p>
                <a
                  href="https://www.google.com/maps?q=23.38892,85.33644"
                  target="_blank"
                  rel="noreferrer"
                  className="about__map-link"
                >
                  <i className="fas fa-map"></i> Open in Google Maps
                </a>
              </div>
            </div>

            <a href="#contact" className="btn-primary about__btn">
              Book Appointment <i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from "react";
import "./About.css";
import SectionHeader from "../Common/SectionHeader";
import aboutImg from "../../assets/WhatsApp Image 2026-03-02 at 6.43.12 PM.jpeg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <SectionHeader
          tag="About Us"
          title="Best Hearing Care Clinic in Ranchi"
          subtitle="Committed to better hearing, clearer speech, and compassionate care for every age group."
        />

        <div className="about__wrapper">
          <div className="about__image">
            <img src={aboutImg} alt="Indian Speech & Hearing Clinic" />
          </div>

          <div className="about__content">
            <h3>Trusted Hearing & Speech Experts</h3>
<p>
  Indian Speech & Hearing Clinic is one of Ranchi’s trusted centers for advanced hearing and speech care, dedicated to improving quality of life through expert diagnosis, personalized solutions, and compassionate support.
</p>

<p>
  With over 17 years of excellence and 9000+ happy patients, we provide complete hearing evaluations, digital hearing aid fittings, speech therapy, and after-care services for children, adults, and seniors.
</p>

<p>
  Our clinic combines experienced audiologists, modern diagnostic technology, and globally trusted hearing aid brands to deliver comfortable, effective, and life-changing hearing solutions tailored to every individual.
</p>

            <div className="about__highlights">
              {/* <div className="about__highlight-card">
                <h4>17+</h4>
                <span>Years of Excellence</span>
              </div> */}
              <div className="about__highlight-card">
                <h4>9000+</h4>
                <span>Happy Patients</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
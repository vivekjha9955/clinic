import React, { useState } from "react";
import "./ContactPage.css";

const ContactPage = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = 
`*New Appointment Request*

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappURL = `https://wa.me/916367667306?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
    }, 3000);
  };

  return (
    <div className="contact-full-page">
      <header className="contact-full-header">
        <div className="container">
          <div className="contact-full-header__inner">
            <button className="contact-back-btn" onClick={onClose}>
              <i className="fas fa-arrow-left"></i>
              Back to Home
            </button>
            <div className="contact-full-header__content">
              <div className="contact-full-header__icon">
                <i className="fas fa-headset"></i>
              </div>
              <div>
                <span className="contact-full-header__tag">Book Consultation</span>
                <h1 className="contact-full-header__title">Contact Our Hearing Experts</h1>
                <p className="contact-full-header__sub">
                  Get expert guidance for hearing tests, hearing aids, speech therapy,
                  and complete hearing care solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="contact-full-body">
        <div className="container">
          <div className="contact-full-layout">

            {/* Left Side */}
            <div className="contact-full-left">
              <div className="contact-highlight-card">
                <div className="contact-highlight-card__icon">
                  <i className="fas fa-phone-volume"></i>
                </div>
                <div>
                  <h3>Call Us Directly</h3>
                  <p>Talk to our clinic team for appointments and quick guidance.</p>
                  <a href="tel:+916367667306">+91 6367667306</a>
                </div>
              </div>

              <div className="contact-highlight-card">
                <div className="contact-highlight-card__icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <h3>WhatsApp Support</h3>
                  <p>Chat with us for quick help, follow-ups, and appointment requests.</p>
                  <a href="https://wa.me/916367667306" target="_blank" rel="noreferrer">
                    Start WhatsApp Chat
                  </a>
                </div>
              </div>

              <div className="contact-highlight-card">
                <div className="contact-highlight-card__icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <h3>Email Us</h3>
                  <p>For detailed queries, reports, or appointment requests.</p>
                  <a href="mailto:indian.speechhearingclinic@gmail.com">
                    indian.speechhearingclinic@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-clinic-card">
                <div className="contact-clinic-card__head">
                  <div className="contact-clinic-card__head-icon">
                    <i className="fas fa-location-dot"></i>
                  </div>
                  <div>
                    <h3>Visit Our Clinic</h3>
                    <p>Indian Speech & Hearing Clinic</p>
                  </div>
                </div>
                <p className="contact-clinic-card__address">
                  1st Floor, Arctic Mall, Bariatu Road, Ranchi - 834009, Jharkhand, India
                </p>
                <div className="contact-clinic-card__meta">
                  <span><i className="fas fa-clock"></i> Mon - Sat: 10:00 AM - 7:00 PM</span>
                  <span><i className="fas fa-user-doctor"></i> Expert Audiologist Support</span>
                </div>
                <div className="contact-map-frame">
                  <iframe
                    title="Clinic Location"
                    src="https://www.google.com/maps?q=23.38892,85.33644&z=15&output=embed"
                    width="100%"
                    height="260"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="contact-full-right">
              <div className="contact-form-card">
                <div className="contact-form-card__head">
                  <span className="contact-form-card__tag">Quick Appointment</span>
                  <h2>Book Your Appointment</h2>
                  <p>Fill in your details and our team will contact you shortly for consultation.</p>
                </div>

                {submitted ? (
                  <div className="contact-success-state">
                    <div className="contact-success-state__icon">
                      <i className="fas fa-circle-check"></i>
                    </div>
                    <h3>Redirecting to WhatsApp!</h3>
                    <p>Your appointment details have been prepared. Complete the chat on WhatsApp.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-form-grid">
                    <div className="contact-form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact-form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <label>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <label>Select Service</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Choose a consultation type</option>
                        <option value="General Consultation">General Consultation</option>
                        <option value="Hearing Consultation">Hearing Consultation</option>
                        <option value="Hearing Aid Consultation">Hearing Aid Consultation</option>
                        <option value="Speech Therapy Consultation">Speech Therapy Consultation</option>
                        <option value="Child Speech Consultation">Child Speech Consultation</option>
                        <option value="Follow-Up Consultation">Follow-Up Consultation</option>
                      </select>
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <label>Your Message</label>
                      <textarea
                        name="message"
                        rows="5"
                        placeholder="Tell us your concern or requirement..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <div className="contact-form-group contact-form-group--full">
                      <button type="submit" className="contact-submit-btn">
                        <i className="fab fa-whatsapp"></i>
                        Send via WhatsApp
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPage;
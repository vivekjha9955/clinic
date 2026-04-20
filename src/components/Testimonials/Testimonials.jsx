import React from "react";
import "./Testimonials.css";
import { TESTIMONIALS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

const StarRating = ({ rating = 5 }) => {
  return (
    <div className="testimonial-card__rating">
      <span className="testimonial-card__score">{rating.toFixed(1)}</span>
      <div className="testimonial-card__stars">
        {Array.from({ length: 5 }).map((_, i) => (
          <i
            key={i}
            className={`fas fa-star ${
              i < Math.round(rating) ? "testimonial-card__star--active" : ""
            }`}
          ></i>
        ))}
      </div>
    </div>
  );
};

const TestimonialCard = ({ testimonial }) => {
  const {
    avatar,
    name,
    text,
    rating = 5,
    tags = [],
    date = "Recent Review",
  } = testimonial;

  return (
    <div className="testimonial-card">
      {/* Top */}
      <div className="testimonial-card__top">
        <div className="testimonial-card__profile">
          <div className="testimonial-card__avatar">{avatar}</div>

          <div className="testimonial-card__user">
            <h3 className="testimonial-card__name">{name}</h3>
            <p className="testimonial-card__meta">1 review, 0 followers</p>
          </div>
        </div>

        <div className="testimonial-card__date">{date}</div>
      </div>

      {/* Rating */}
      <StarRating rating={rating} />

      {/* Tags */}
      {tags.length > 0 && (
        <div className="testimonial-card__tags">
          {tags.map((tag, index) => (
            <span className="testimonial-card__tag" key={index}>
              <i className="far fa-thumbs-up"></i> {tag}
            </span>
          ))}
        </div>
      )}

      {/* Review text */}
      <p className="testimonial-card__text">{text}</p>

      {/* Footer actions */}
      <div className="testimonial-card__actions">
        <button className="testimonial-card__action" type="button">
          <i className="far fa-thumbs-up"></i>
          <span>Helpful</span>
        </button>

        <button className="testimonial-card__action" type="button">
          <i className="far fa-comment"></i>
          <span>Comment</span>
        </button>

        <button className="testimonial-card__action" type="button">
          <i className="fas fa-share"></i>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="testimonials section section--testimonials" id="testimonials">
      <div className="container">
        <SectionHeader
          tag="Patient Reviews"
          title="What Our Patients Say"
          subtitle="Trusted by families across Ranchi for professional hearing tests, hearing aid fittings, speech therapy, and long-term hearing care support."
        />

        <div className="testimonials__stats">
          <div className="testimonials__stat-card">
            <div className="testimonials__stat-value">
              <span>4.9</span>
              <i className="fas fa-star"></i>
            </div>
            <p>Average Patient Rating</p>
          </div>

          <div className="testimonials__stat-card">
            <div className="testimonials__stat-value">
              <span>7000+</span>
            </div>
            <p>Happy Patients Served</p>
          </div>

          <div className="testimonials__stat-card">
            <div className="testimonials__stat-value">
              <span>17+</span>
            </div>
            <p>Years of Trusted Care</p>
          </div>
        </div>

        <div className="testimonials__grid">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="testimonials__cta">
          <div className="testimonials__cta-text">
            <h3>Experience Trusted Hearing Care in Ranchi</h3>
            <p>
              From accurate hearing tests to advanced hearing aids and speech
              therapy, our expert team is here to guide you at every step.
            </p>
          </div>

          <a href="#contact" className="testimonials__cta-btn">
            Book Appointment <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
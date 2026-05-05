import React, { useState, useEffect } from "react";
import "./HearingTypes.css";

import bteImg          from "../../assets/starkey-bte-13-muse-iq-1200-.jpg";
import ricImg          from "../../assets/WidexSmartRIC.jpg";
import cicImg          from "../../assets/VirtoParadise.jpg";
import iicImg          from "../../assets/Starkey-SoundLens-iQ-IIC.jpg";
import rechargeableImg from "../../assets/ReSoundNexia.jpg";
import itcImg          from "../../assets/SigniaFunSP.png";

const hearingTypesData = [
  {
    id: 1,
    title: "Behind the Ear (BTE)",
    image: bteImg,
    icon: "fas fa-headphones",
    description: "Powerful and versatile hearing aid worn behind the ear for strong amplification and dependable daily use.",
    badge: "Moderate to profound hearing loss",
    overview: "Behind-the-Ear (BTE) hearing aids are one of the most widely used and trusted hearing aid styles. They sit comfortably behind the ear and connect to an earmold or thin tube placed inside the ear canal. These devices are known for delivering powerful amplification, long-lasting performance, and easy handling. They are highly suitable for children, adults, and senior users who need a strong, durable, and practical hearing solution for daily life.",
    suitableFor: "Best for children, elderly users, and adults with moderate to profound hearing loss who want powerful sound, comfort, and easy maintenance.",
    fittingType: "Behind-the-ear body with earmold or slim tube",
    visibility: "Visible but comfortable and secure",
    pros: ["Strong amplification for moderate to profound hearing loss", "Easy to handle and clean, especially for senior users", "Durable and reliable for long-term use", "Available in Bluetooth and rechargeable options", "Suitable for children and users needing larger controls"],
    cons: ["Slightly more visible than smaller in-ear styles", "Can feel bulky for users preferring ultra-discreet devices", "May require a short adjustment period for first-time users"],
  },
  {
    id: 2,
    title: "Receiver in the Canal (RIC)",
    image: ricImg,
    icon: "fas fa-ear-listen",
    description: "Slim and modern design with natural sound quality, comfort, and advanced Bluetooth connectivity.",
    badge: "Mild to severe hearing loss",
    overview: "Receiver-in-Canal (RIC) hearing aids are among the most popular modern hearing aid styles. They have a small body that sits behind the ear while the receiver is placed directly in the ear canal. This design allows for clearer and more natural sound quality, improved comfort, and better speech understanding. RIC devices are lightweight, discreet, and often include advanced features such as Bluetooth streaming, rechargeable batteries, and app-based controls, making them ideal for modern users.",
    suitableFor: "Best for adults who want a discreet, premium hearing aid with natural sound and smart connectivity.",
    fittingType: "Slim behind-the-ear shell with receiver placed in canal",
    visibility: "Very discreet and elegant",
    pros: ["Natural and clear sound quality", "Slim, stylish, and lightweight design", "Excellent Bluetooth and smartphone compatibility", "Comfortable for long daily wear", "Available in advanced rechargeable models"],
    cons: ["Smaller parts may need careful handling", "Not ideal for users with severe dexterity issues", "Receiver may require maintenance over time"],
  },
  {
    id: 3,
    title: "Completely in the Canal (CIC)",
    image: cicImg,
    icon: "fas fa-compact-disc",
    description: "Compact custom-fit device that sits deep in the ear canal for discreet and natural-looking use.",
    badge: "Mild to moderate hearing loss",
    overview: "Completely-in-the-Canal (CIC) hearing aids are custom-made devices designed to fit almost entirely inside the ear canal. They are chosen by users who want a discreet and nearly invisible hearing solution. CIC devices offer a natural placement that can improve sound direction awareness and reduce wind noise compared to larger styles.",
    suitableFor: "Best for adults with mild to moderate hearing loss who prefer a discreet and custom-fit hearing aid.",
    fittingType: "Custom molded to sit deep in the ear canal",
    visibility: "Very low visibility",
    pros: ["Very discreet and cosmetically appealing", "Custom fit for personal comfort", "Less wind noise due to deeper placement", "Natural sound pickup due to ear canal positioning", "Comfortable for users wanting minimal visibility"],
    cons: ["Small size can be difficult to handle", "Fewer advanced features than larger devices", "Battery life may be shorter due to compact size"],
  },
  {
    id: 4,
    title: "Invisible in the Canal (IIC)",
    image: iicImg,
    icon: "fas fa-eye-slash",
    description: "An ultra-discreet custom hearing aid placed deeper inside the ear canal for nearly invisible wear.",
    badge: "Mild to moderate hearing loss",
    overview: "Invisible-in-the-Canal (IIC) hearing aids are one of the smallest and most discreet hearing aid styles available. These custom devices are placed deeper in the ear canal than CIC models, making them nearly invisible when worn. They are perfect for users who want maximum cosmetic discretion while still receiving reliable hearing support.",
    suitableFor: "Best for users who want the most discreet hearing aid possible for mild to moderate hearing loss.",
    fittingType: "Custom deep-canal fit for ultra-discreet wear",
    visibility: "Nearly invisible",
    pros: ["Extremely discreet and cosmetically preferred", "Sits deep in the canal for natural placement", "Less visible than most hearing aid styles", "Comfortable for users prioritizing appearance", "Good for first-time users wanting discreet support"],
    cons: ["Very small and can be harder to insert or remove", "Limited space for advanced features", "Not ideal for severe hearing loss"],
  },
  {
    id: 5,
    title: "Rechargeable Hearing Aid",
    image: rechargeableImg,
    icon: "fas fa-battery-half",
    description: "Convenient modern hearing aid solution with rechargeable power, all-day use, and easy charging.",
    badge: "All-day convenience",
    overview: "Rechargeable hearing aids are designed for convenience, simplicity, and modern lifestyle needs. Instead of replacing disposable batteries regularly, users can simply place the device in a charging dock and use it again the next day. These hearing aids are especially useful for elderly users, busy professionals, and anyone who wants less maintenance and more convenience.",
    suitableFor: "Best for users who want convenience, eco-friendly operation, and no hassle of changing batteries frequently.",
    fittingType: "Available in multiple hearing aid styles with charging support",
    visibility: "Depends on model type",
    pros: ["No need to replace disposable batteries regularly", "Easy and convenient daily charging", "Ideal for elderly users and busy lifestyles", "Environmentally friendly and cost-effective over time", "Often available with premium smart features"],
    cons: ["Requires regular charging routine", "May not suit users without reliable charging access", "Battery lifespan can reduce after years of heavy use"],
  },
  {
    id: 6,
    title: "In the Canal (ITC)",
    image: itcImg,
    icon: "fas fa-microchip",
    description: "Custom in-ear hearing aid balancing discreet appearance, comfort, and useful modern features.",
    badge: "Mild to moderately severe hearing loss",
    overview: "In-the-Canal (ITC) hearing aids are custom-made devices that sit partly in the ear canal, making them less visible than BTE styles while still allowing room for useful features. They provide a strong balance between cosmetic appeal, comfort, and performance.",
    suitableFor: "Best for adults who want a discreet custom device with a good balance of visibility, comfort, and features.",
    fittingType: "Custom fit partially in the ear canal",
    visibility: "Discreet but easier to handle than CIC/IIC",
    pros: ["Less visible than larger behind-the-ear devices", "Custom fit for comfort and stable wear", "Can support more features than smaller canal devices", "Easier to handle than IIC or CIC styles", "Good balance of performance and appearance"],
    cons: ["Still smaller than BTE, so handling needs some care", "May be visible depending on ear shape", "Can be affected by earwax or moisture over time"],
  },
];

// ── Detail Overlay ────────────────────────────────────────────────────────────
const TypeDetail = ({ type, onClose, onContactClick }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handlePopState = () => {
      document.body.style.overflow = "auto";
      onClose();
    };

    window.addEventListener("popstate", handlePopState);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleBack = () => {
    window.history.back(); // triggers popstate → onClose
  };

  const handleBookConsultation = () => {
    // Go back first (closes this detail), then open contact page
    window.history.back();
    setTimeout(() => {
      onContactClick && onContactClick();
    }, 80);
  };

  return (
    <div className="ht-detail-page">
      {/* Header */}
      <div className="ht-detail-header">
        <div className="ht-detail-header__inner">
          <button className="ht-detail-back" onClick={handleBack}>
            <i className="fas fa-arrow-left"></i> Back to Hearing Types
          </button>
          <div className="ht-detail-header__content">
            <div className="ht-detail-header__icon">
              {type.image
                ? <img src={type.image} alt={type.title} className="ht-card__img" />
                : <i className={type.icon}></i>
              }
            </div>
            <div>
              <h2 className="ht-detail-header__title">{type.title}</h2>
              <p className="ht-detail-header__sub">
                Learn about the benefits, ideal use cases, and suitability of this hearing aid style.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="container ht-detail-body">
        {/* Overview */}
        <div className="ht-detail-overview">
          <div className="ht-detail-overview__text">
            <span className="ht-detail-tag">Hearing Aid Category</span>
            <h2 className="ht-detail-overview__title">{type.title}</h2>
            <p>{type.overview}</p>
            <div className="ht-detail-info-grid">
              <div className="ht-info-box">
                <span className="ht-info-label">Best For</span>
                <span className="ht-info-value">{type.suitableFor}</span>
              </div>
              <div className="ht-info-box">
                <span className="ht-info-label">Fitting Style</span>
                <span className="ht-info-value">{type.fittingType}</span>
              </div>
              <div className="ht-info-box">
                <span className="ht-info-label">Visibility</span>
                <span className="ht-info-value">{type.visibility}</span>
              </div>
              <div className="ht-info-box">
                <span className="ht-info-label">Recommended Use</span>
                <span className="ht-info-value">{type.badge}</span>
              </div>
            </div>
            <div className="ht-detail-suitable">
              <i className="fas fa-circle-check"></i>
              <span>{type.suitableFor}</span>
            </div>
          </div>

          <div className="ht-detail-overview__img">
            <div className="ht-detail-overview__icon-circle">
              {type.image
                ? <img src={type.image} alt={type.title} className="ht-card__img" />
                : <i className={type.icon}></i>
              }
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="ht-detail-pros-cons">
          <div className="ht-pros">
            <h3 className="ht-pros__title">
              <i className="fas fa-thumbs-up"></i> Key Benefits
            </h3>
            <ul className="ht-pros__list">
              {type.pros.map((pro, i) => (
                <li key={i}><i className="fas fa-check-circle"></i><span>{pro}</span></li>
              ))}
            </ul>
          </div>
          <div className="ht-cons">
            <h3 className="ht-cons__title">
              <i className="fas fa-lightbulb"></i> Things to Consider
            </h3>
            <ul className="ht-cons__list">
              {type.cons.map((con, i) => (
                <li key={i}><i className="fas fa-circle"></i><span>{con}</span></li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="ht-detail-cta">
          <div className="ht-detail-cta__text">
            <h3>Need help choosing the right hearing aid?</h3>
            <p>
              Our experts at Indian Speech and Hearing Clinic will help you compare styles,
              understand your hearing needs, and recommend the most suitable hearing aid
              based on comfort, hearing loss, and lifestyle.
            </p>
          </div>
          <button
            type="button"
            className="ht-detail-cta__btn"
            onClick={handleBookConsultation}
          >
            Book a Consultation <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

// ── Main Section ──────────────────────────────────────────────────────────────
const HearingTypes = ({ onContactClick }) => {
  const [selectedType, setSelectedType] = useState(null);

  const openTypeDetail = (item) => {
    // Push history state BEFORE setting state so popstate fires correctly
    window.history.pushState({ modal: "hearing-type", typeId: item.id }, "");
    setSelectedType(item);
  };

  return (
    <>
      <section className="hearing-types section" id="hearing-types">
        <div className="container">
          <div className="section-heading">
            <span className="section-tag">Hearing Aid Types</span>
            <h2 className="section-title">Types of Hearing Aids</h2>
            <p className="section-subtitle">
              Understanding the different styles helps you choose the right
              hearing aid for your lifestyle, degree of hearing loss, and personal preference.
            </p>
          </div>

          <div className="ht-grid">
            {hearingTypesData.map((item) => (
              <div
                key={item.id}
                className="ht-card"
                onClick={() => openTypeDetail(item)}
              >
                {/* Default visible content */}
                <div className="ht-card__content">
                  <div className="ht-card__icon-wrap">
                    {item.image
                      ? <img src={item.image} alt={item.title} className="ht-card__img" />
                      : <i className={item.icon}></i>
                    }
                  </div>
                  <h3 className="ht-card__label">{item.title}</h3>
                </div>

                {/* Hover reveal content */}
                <div className="ht-card__hover">
                  <div className="ht-card__icon-wrap">
                    {item.image
                      ? <img src={item.image} alt={item.title} className="ht-card__img" />
                      : <i className={item.icon}></i>
                    }
                  </div>
                  <h3 className="ht-card__label">{item.title}</h3>
                  <p className="ht-card__desc">{item.description}</p>
                  <div className="ht-card__meta">{item.badge}</div>
                  <div className="ht-card__cta">
                    Know More <i className="fas fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedType && (
        <TypeDetail
          type={selectedType}
          onClose={() => setSelectedType(null)}
          onContactClick={onContactClick}
        />
      )}
    </>
  );
};

export default HearingTypes;
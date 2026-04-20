import React, { useEffect, useState } from "react";
import "./HearingTypes.css";
import SectionHeader from "../Common/SectionHeader";

const HEARING_TYPES = [
  {
    id: 1,
    name: "Behind the Ear (BTE)",
    shortDesc: "Powerful and versatile hearing aid worn behind the ear for strong amplification.",
    icon: "fas fa-headphones",
    bestFor: "Moderate to profound hearing loss",
    visibility: "Visible",
    comfort: "Stable and easy to handle",
    battery: "Long battery life / Rechargeable options",
    suitable: "Adults, seniors, children, severe hearing needs",
    pros: [
      "Powerful amplification for higher hearing loss",
      "Easy to handle and maintain",
      "Supports larger batteries and rechargeable options",
      "Reliable fit for all age groups"
    ],
    cons: [
      "More visible than in-ear devices",
      "Can feel bulkier for first-time users",
      "May interfere slightly with glasses for some users"
    ],
    theme: {
      accent: "#ea580c",
      soft: "#fff4ec",
      gradient: "linear-gradient(135deg, #fff4ec 0%, #ffffff 100%)",
      card: "linear-gradient(135deg, #ea580c 0%, #fb923c 100%)"
    }
  },
  {
    id: 2,
    name: "Receiver in the Canal (RIC)",
    shortDesc: "Slim and modern design with natural sound and excellent Bluetooth support.",
    icon: "fas fa-assistive-listening-systems",
    bestFor: "Mild to severe hearing loss",
    visibility: "Low visibility",
    comfort: "Lightweight and discreet",
    battery: "Rechargeable / Replaceable battery",
    suitable: "Working professionals, adults, active users",
    pros: [
      "Natural sound quality and comfort",
      "Very popular slim modern design",
      "Great Bluetooth and app connectivity",
      "Comfortable for all-day wear"
    ],
    cons: [
      "Receiver wire needs careful handling",
      "Can be less ideal in high moisture environments",
      "May require more regular maintenance"
    ],
    theme: {
      accent: "#3f37c9",
      soft: "#eef0ff",
      gradient: "linear-gradient(135deg, #eef0ff 0%, #ffffff 100%)",
      card: "linear-gradient(135deg, #3f37c9 0%, #6366f1 100%)"
    }
  },
  {
    id: 3,
    name: "Completely in the Canal (CIC)",
    shortDesc: "Compact custom-fit device that sits deep in the ear canal for discreet use.",
    icon: "fas fa-circle-dot",
    bestFor: "Mild to moderate hearing loss",
    visibility: "Very discreet",
    comfort: "Custom fit, minimal visibility",
    battery: "Small battery / Compact form",
    suitable: "Style-conscious adults and first-time users",
    pros: [
      "Very discreet and cosmetically appealing",
      "Custom-moulded for a personalised fit",
      "Less visible during conversations",
      "Comfortable for users wanting subtle devices"
    ],
    cons: [
      "Smaller battery may need frequent replacement",
      "Fewer advanced features than larger models",
      "Not ideal for severe hearing loss"
    ],
    theme: {
      accent: "#0f766e",
      soft: "#e8fbf8",
      gradient: "linear-gradient(135deg, #e8fbf8 0%, #ffffff 100%)",
      card: "linear-gradient(135deg, #0f766e 0%, #14b8a6 100%)"
    }
  },
  {
    id: 4,
    name: "Invisible in the Canal (IIC)",
    shortDesc: "Ultra-discreet custom hearing aid placed deeper inside the ear canal.",
    icon: "fas fa-eye-slash",
    bestFor: "Mild to moderate hearing loss",
    visibility: "Nearly invisible",
    comfort: "Deep custom fit",
    battery: "Compact battery system",
    suitable: "Users prioritising invisibility and style",
    pros: [
      "Maximum cosmetic discretion",
      "Natural placement deep in the ear canal",
      "Very attractive for users wanting invisible wear",
      "Custom-built for your ear shape"
    ],
    cons: [
      "Tiny size can be harder to handle",
      "Limited space for advanced features",
      "Not ideal for severe hearing loss"
    ],
    theme: {
      accent: "#7c3aed",
      soft: "#f3ecff",
      gradient: "linear-gradient(135deg, #f3ecff 0%, #ffffff 100%)",
      card: "linear-gradient(135deg, #7c3aed 0%, #a855f7 100%)"
    }
  },
  {
    id: 5,
    name: "Rechargeable Hearing Aid",
    shortDesc: "Convenient all-day hearing solution with charging case and no battery changes.",
    icon: "fas fa-battery-full",
    bestFor: "Daily hassle-free hearing support",
    visibility: "Depends on style (RIC/BTE/Custom)",
    comfort: "Easy everyday use",
    battery: "Rechargeable all-day battery",
    suitable: "Busy users, seniors, modern lifestyle users",
    pros: [
      "No need to replace small batteries",
      "Easy charging overnight",
      "Great for daily convenience",
      "Popular in modern premium hearing aids"
    ],
    cons: [
      "Requires charging routine",
      "Battery performance depends on usage pattern",
      "May cost slightly more initially"
    ],
    theme: {
      accent: "#16a34a",
      soft: "#ecfdf3",
      gradient: "linear-gradient(135deg, #ecfdf3 0%, #ffffff 100%)",
      card: "linear-gradient(135deg, #16a34a 0%, #22c55e 100%)"
    }
  },
  {
    id: 6,
    name: "In the Canal (ITC)",
    shortDesc: "Custom in-ear hearing aid offering a balance of discretion and useful features.",
    icon: "fas fa-microchip",
    bestFor: "Mild to moderately severe hearing loss",
    visibility: "Discreet",
    comfort: "Balanced fit and usability",
    battery: "Compact but practical battery life",
    suitable: "Adults wanting discreet fit with more features",
    pros: [
      "More discreet than BTE models",
      "Can support more features than smaller in-ear types",
      "Custom fit for comfort",
      "Good balance between size and performance"
    ],
    cons: [
      "Smaller than BTE, so handling may be trickier",
      "Can be affected by earwax/moisture",
      "May not suit very severe hearing loss"
    ],
    theme: {
      accent: "#be123c",
      soft: "#ffeaf0",
      gradient: "linear-gradient(135deg, #ffeaf0 0%, #ffffff 100%)",
      card: "linear-gradient(135deg, #be123c 0%, #f43f5e 100%)"
    }
  }
];

const HearingTypeCard = ({ item, onClick }) => {
  return (
    <div
      className="ht-card"
      onClick={() => onClick(item)}
      style={{
        "--ht-accent": item.theme.accent,
        "--ht-soft": item.theme.soft,
        "--ht-card-bg": item.theme.card,
      }}
    >
      <div className="ht-card__icon-wrap">
        <i className={item.icon}></i>
      </div>

      <h3 className="ht-card__label">{item.name}</h3>
      <p className="ht-card__desc">{item.shortDesc}</p>

      <div className="ht-card__meta">
        <span>{item.bestFor}</span>
      </div>

      <div className="ht-card__cta">
        Learn More <i className="fas fa-arrow-right"></i>
      </div>
    </div>
  );
};

const HearingTypeDetail = ({ item, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ hearingTypeDetail: true }, "");

    const handlePopState = () => onClose();
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClose = () => {
    if (window.history.state && window.history.state.hearingTypeDetail) {
      window.history.back();
    } else {
      onClose();
    }
  };

  return (
    <div
      className="ht-detail-page"
      style={{
        "--ht-accent": item.theme.accent,
        "--ht-soft": item.theme.soft,
        "--ht-gradient": item.theme.gradient,
      }}
    >
      <div className="ht-detail-header">
        <div className="container ht-detail-header__inner">
          <button className="ht-detail-back" onClick={handleClose}>
            <i className="fas fa-arrow-left"></i> Back
          </button>

          <div className="ht-detail-header__content">
            <div className="ht-detail-header__icon">
              <i className={item.icon}></i>
            </div>
            <div>
              <h1 className="ht-detail-header__title">{item.name}</h1>
              <p className="ht-detail-header__sub">{item.shortDesc}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="ht-detail-body">
        <div className="container">
          <div className="ht-detail-overview">
            <div className="ht-detail-overview__text">
              <span className="ht-detail-tag">Hearing Aid Type</span>
              <h2 className="ht-detail-overview__title">Understanding {item.name}</h2>
              <p>
                {item.shortDesc} This style is designed to balance comfort, sound clarity,
                daily usability, and hearing support depending on your hearing level and lifestyle.
              </p>

              <div className="ht-detail-info-grid">
                <div className="ht-info-box">
                  <span className="ht-info-label">Best For</span>
                  <span className="ht-info-value">{item.bestFor}</span>
                </div>

                <div className="ht-info-box">
                  <span className="ht-info-label">Visibility</span>
                  <span className="ht-info-value">{item.visibility}</span>
                </div>

                <div className="ht-info-box">
                  <span className="ht-info-label">Comfort</span>
                  <span className="ht-info-value">{item.comfort}</span>
                </div>

                <div className="ht-info-box">
                  <span className="ht-info-label">Battery</span>
                  <span className="ht-info-value">{item.battery}</span>
                </div>
              </div>

              <div className="ht-detail-suitable">
                <i className="fas fa-user-check"></i>
                <span>
                  <strong>Recommended for:</strong> {item.suitable}
                </span>
              </div>
            </div>

            <div className="ht-detail-overview__img">
              <div className="ht-detail-overview__icon-circle">
                <i className={item.icon}></i>
              </div>
            </div>
          </div>

          <div className="ht-detail-pros-cons">
            <div className="ht-pros">
              <h3 className="ht-pros__title">
                <i className="fas fa-check-circle"></i> Advantages
              </h3>
              <ul className="ht-pros__list">
                {item.pros.map((pro, idx) => (
                  <li key={idx}>
                    <i className="fas fa-check"></i>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ht-cons">
              <h3 className="ht-cons__title">
                <i className="fas fa-exclamation-circle"></i> Considerations
              </h3>
              <ul className="ht-cons__list">
                {item.cons.map((con, idx) => (
                  <li key={idx}>
                    <i className="fas fa-circle"></i>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="ht-detail-cta">
            <div className="ht-detail-cta__text">
              <h3>Need Help Choosing the Right Hearing Aid Type?</h3>
              <p>
                Book a free consultation and get expert guidance based on your hearing loss,
                comfort preference, and lifestyle needs.
              </p>
            </div>

            <a href="#contact" className="ht-detail-cta__btn" onClick={handleClose}>
              <i className="fas fa-calendar-check"></i> Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const HearingTypes = () => {
  const [selectedType, setSelectedType] = useState(null);

  return (
    <section className="hearing-types" id="hearing-types">
      <div className="container">
        <SectionHeader
          tag="Hearing Aid Types"
          title="Types of Hearing Aids"
          subtitle="Understanding the different styles helps you choose the right hearing aid for your lifestyle, degree of hearing loss, and personal preference."
        />

        <div className="ht-grid">
          {HEARING_TYPES.map((item) => (
            <HearingTypeCard key={item.id} item={item} onClick={setSelectedType} />
          ))}
        </div>
      </div>

      {selectedType && (
        <HearingTypeDetail
          item={selectedType}
          onClose={() => setSelectedType(null)}
        />
      )}
    </section>
  );
};

export default HearingTypes;
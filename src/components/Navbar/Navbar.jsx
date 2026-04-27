import React, { useState } from "react";
import "./Navbar.css";
import { NAV_LINKS } from "../../data/constants";
import logo from "../../assets/WhatsApp Image 2026-03-02 at 6.43.12 PM.jpeg";

const Navbar = ({ onFAQClick, onBrandSelect, onServiceSelect, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const handleNavClick = (e, link) => {
    if (link.label === "FAQ") {
      e.preventDefault();
      onFAQClick && onFAQClick();
      setMenuOpen(false);
    }
  };

  const handleServiceClick = (svc) => {
    onServiceSelect && onServiceSelect(svc);
    setMenuOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={() => {
              setMenuOpen(false);
              setMobileServicesOpen(false);
            }}
          >
            <img
              src={logo}
              alt="Indian Speech & Hearing Clinic Logo"
              className="navbar__logo-img"
            />
            <span className="navbar__logo-text">
              Indian Speech and Hearing
              <span className="navbar__logo-accent"> Clinic</span>
            </span>
          </a>

          <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="navbar__item">
                {/* FAQ */}
                {link.label === "FAQ" ? (
                  <button
                    className="navbar__link navbar__faq-btn"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.label}
                  </button>
                ) : link.label === "Services" ? (
  <>
    {/* Services main link */}
    <a
      href={link.href || "#services"}
      className="navbar__link navbar__services-toggle"
      onClick={(e) => {
        if (window.innerWidth <= 992) {
          e.preventDefault();
          setMobileServicesOpen(!mobileServicesOpen);
        } else {
          setMenuOpen(false);
          setMobileServicesOpen(false);
        }
      }}
    >
      {link.label}
      <i
        className={`fas fa-chevron-down navbar__chevron ${
          mobileServicesOpen ? "navbar__chevron--open" : ""
        }`}
      ></i>
    </a>

    {/* Services Dropdown */}
    <ul
      className={`navbar__dropdown ${
        mobileServicesOpen ? "navbar__dropdown--mobile-open" : ""
      }`}
    >
      {SERVICES_DATA.map((svc) =>
        svc.type === "heading" ? (
          <li key={svc.id} className="navbar__dropdown-heading">
            {svc.title}
          </li>
        ) : (
          <li key={svc.id}>
            <button
              className="navbar__dropdown-link navbar__dropdown-btn"
              onClick={() => handleServiceClick(svc)}
            >
              <i
                className={svc.icon}
                style={{ marginRight: 8, color: "var(--primary)" }}
              ></i>
              {svc.title}
            </button>
          </li>
        )
      )}
    </ul>
  </>
)
                 : (
                  <>
                    <a
                      href={link.href || "#home"}
                      className="navbar__link"
                      onClick={() => {
                        setMenuOpen(false);
                        setMobileServicesOpen(false);
                      }}
                    >
                      {link.label}
                      {link.dropdown && (
                        <i className="fas fa-chevron-down navbar__chevron"></i>
                      )}
                    </a>

                    {/* Generic dropdown */}
                    {link.dropdown &&
                      link.label !== "Hearing Devices" && (
                        <ul className="navbar__dropdown">
                          {link.dropdown.map((item) => (
                            <li key={item.label}>
                              <a
                                href={item.href || "#home"}
                                className="navbar__dropdown-link"
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                              >
                                {item.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                  </>
                )}
              </li>
            ))}

    <li>
  <button
    type="button"
    className="navbar__link navbar__cta navbar__cta-btn"
    onClick={() => {
      setMenuOpen(false);
      setMobileServicesOpen(false);
      onContactClick && onContactClick();
    }}
  >
    Contact Us
  </button>
</li>
          </ul>

          <button
            className="navbar__hamburger"
            onClick={() => {
              setMenuOpen(!menuOpen);
              if (menuOpen) setMobileServicesOpen(false);
            }}
            aria-label="Toggle menu"
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

const SERVICES_DATA = [
  { id: "h1", type: "heading", title: "Diagnostic Services" },
  { id: 1, icon: "fas fa-microscope", title: "Hearing Test" },
  { id: 2, icon: "fas fa-headphones", title: "Hearing Aid" },
  { id: 3, icon: "fas fa-comments", title: "Speech Therapy" },
  { id: 4, icon: "fas fa-heart-pulse", title: "Hearing Care" },
  { id: 5, icon: "fas fa-wave-square", title: "Pure Tone Audiometry" },
  { id: 6, icon: "fas fa-comment-dots", title: "Speech Audiometry" },
  { id: 7, icon: "fas fa-brain", title: "Auditory Brainstem Response (ABR)" },
  { id: 8, icon: "fas fa-eye", title: "Electronystagmography (ENG)" },
  { id: 9, icon: "fas fa-bolt", title: "Electrocochleography (ECoG)" },
  { id: 10, icon: "fas fa-sliders", title: "Vestibular Evoked Myogenic Potential (VEMP)" },
  { id: 11, icon: "fas fa-volume-down", title: "Otoacoustic Emission (OAE)" },

  { id: "h2", type: "heading", title: "Additional Categories" },
  { id: 12, icon: "fas fa-user-doctor", title: "Diagnostic Services (For Adults)" },
  { id: 13, icon: "fas fa-child-reaching", title: "Diagnostic Services (For Children)" },
  { id: 14, icon: "fas fa-hand-holding-medical", title: "Rehabilitative Services (For Both)" },
];

export default Navbar;
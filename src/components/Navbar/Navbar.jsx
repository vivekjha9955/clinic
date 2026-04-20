import React, { useState } from "react";
import "./Navbar.css";
import { NAV_LINKS } from "../../data/constants";
import logo from "../../assets/WhatsApp Image 2026-03-02 at 6.43.12 PM.jpeg";

const Navbar = ({ onFAQClick, onBrandSelect, onServiceSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, link) => {
    if (link.label === "FAQ") {
      e.preventDefault();
      onFAQClick();
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">
          {/* Logo */}
          <a href="#home" className="navbar__logo">
            <img src={logo} alt="Indian Speech & Hearing Clinic Logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">
              Indian Speech and Hearing<span className="navbar__logo-accent"> Clinic</span>
            </span>
          </a>

          <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="navbar__item">
                {link.label === "FAQ" ? (
                  <button
                    className="navbar__link navbar__faq-btn"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.label}
                  </button>
                ) : (
                  <a
                    href={link.href || "#home"}
                    className="navbar__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                    {link.dropdown && (
                      <i className="fas fa-chevron-down navbar__chevron"></i>
                    )}
                  </a>
                )}

                {/* Services Dropdown */}
                {link.label === "Services" && link.dropdown && (
                  <ul className="navbar__dropdown">
                    {SERVICES_DATA.map((svc) => (
                      <li key={svc.id}>
                        <button
                          className="navbar__dropdown-link navbar__dropdown-btn"
                          onClick={() => {
                            onServiceSelect && onServiceSelect(svc);
                            setMenuOpen(false);
                          }}
                        >
                          <i className={svc.icon} style={{ marginRight: 8, color: "var(--primary)" }}></i>
                          {svc.title}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Generic dropdown */}
                {link.dropdown && link.label !== "Services" && link.label !== "Hearing Devices" && (
                  <ul className="navbar__dropdown">
                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href || "#home"}
                          className="navbar__dropdown-link"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a href="#contact" className="navbar__link navbar__cta" onClick={() => setMenuOpen(false)}>
                Contact Us
              </a>
            </li>
          </ul>

          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
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
  { id: 1, icon: "fas fa-microscope", title: "Hearing Test" },
  { id: 2, icon: "fas fa-headphones", title: "Hearing Aid" },
  { id: 3, icon: "fas fa-comments", title: "Speech Therapy" },
  { id: 4, icon: "fas fa-heart-pulse", title: "Hearing Care" },
  { id: 5, icon: "fas fa-stethoscope", title: "ENT Services" },
  { id: 6, icon: "fas fa-wave-square", title: "Pure Tone Audiometry" },
  { id: 7, icon: "fas fa-brain", title: "BERA Test" },
  { id: 8, icon: "fas fa-circle-dot", title: "OAE Test" },
];

export default Navbar;
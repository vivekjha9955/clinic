import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NAV_LINKS, SERVICES } from "../../data/constants";
import logo from "../../assets/WhatsApp Image 2026-03-02 at 6.43.12 PM.jpeg";

const Navbar = ({
  onFAQClick,
  onContactClick,
  onServiceSelect,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= 992
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      if (window.innerWidth > 992) setServicesOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (e, link) => {
    if (link.label === "FAQ") {
      e.preventDefault();
      if (onFAQClick) onFAQClick();
      setMenuOpen(false);
      setServicesOpen(false);
    }
  };

  /* =========================
     NAV_LINKS label → SERVICES title mapping
     ServiceDetail uses service.title as key
  ========================= */
  const SERVICE_MAP = {
    "Hearing Care Solution in Ranchi": "Hearing Care",
    "Hearing Test in Ranchi":          "Hearing Test",
    "Hearing Aid Center in Ranchi":    "Hearing Aid",
    "Speech Therapy in Ranchi":        "Speech Therapy",
    "ENT Services in Ranchi":          "Hearing Care",
    "Pure Tone Audiometry Test":       "Pure Tone Audiometry",
    "BERA Test in Ranchi":             "Auditory Brainstem Response (ABR)",
    "OAE Test in Ranchi":              "Otoacoustic Emission (OAE)",
  };

  const handleServiceClick = (navService) => {
    const targetTitle = SERVICE_MAP[navService.label] || navService.label;

    // SERVICES array se icon + id lo (ServiceDetail ko chahiye)
    const matchedService =
      SERVICES.find((s) => s.title === targetTitle) || {
        id: 0,
        icon: "fas fa-ear-listen",
        title: targetTitle,
      };

    if (onServiceSelect) {
      onServiceSelect(matchedService);
    }

    setTimeout(() => {
      setMenuOpen(false);
      setServicesOpen(false);
    }, 100);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">

          {/* LOGO */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
          >
            <img src={logo} alt="Logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">
              Indian Speech and Hearing
              <span className="navbar__logo-accent"> Clinic</span>
            </span>
          </a>

          {/* NAV LINKS */}
          <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>

            {NAV_LINKS.map((link) => {

              /* ---- SERVICES ---- */
              if (link.label === "Services") {

                /* MOBILE */
                if (isMobile) {
                  return (
                    <li
                      key={link.label}
                      className="navbar__item navbar__services-item"
                    >
                      <div className="navbar__services-row">

                        <a
                          href="#services"
                          className="navbar__link navbar__services-link"
                          onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                        >
                          Services
                        </a>

                        <button
                          type="button"
                          className="navbar__services-arrow"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setServicesOpen((prev) => !prev);
                          }}
                        >
                          <i
                            className={`fas fa-chevron-right navbar__services-arrow-icon ${
                              servicesOpen ? "navbar__services-arrow-icon--open" : ""
                            }`}
                          ></i>
                        </button>
                      </div>

                      {/* MOBILE DROPDOWN */}
                      {servicesOpen && (
                        <div className="navbar__services-side-dropdown">

                          <div className="navbar__dropdown-heading">
                            Main Services
                          </div>

                          {link.dropdown?.map((service) => (
                            <button
                              key={service.label}
                              className="navbar__dropdown-btn"
                              onClick={() => handleServiceClick(service)}
                            >
                              {service.label}
                            </button>
                          ))}

                          <div className="navbar__dropdown-heading">
                            Explore More
                          </div>

                          <a
                            href="#services"
                            className="navbar__dropdown-link"
                            onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                          >
                            View All Services
                          </a>
                        </div>
                      )}
                    </li>
                  );
                }

                /* DESKTOP */
                return (
                  <li key={link.label} className="navbar__item">
                    <button className="navbar__link navbar__services-toggle">
                      Services
                      <i className="fas fa-chevron-down navbar__chevron"></i>
                    </button>

                    <ul className="navbar__dropdown">
                      <li className="navbar__dropdown-heading">Main Services</li>

                      {link.dropdown?.map((service) => (
                        <li key={service.label}>
                          <button
                            className="navbar__dropdown-btn"
                            onClick={() => handleServiceClick(service)}
                          >
                            {service.label}
                          </button>
                        </li>
                      ))}

                      <li className="navbar__dropdown-heading">Explore More</li>
                      <li>
                        <a
                          href="#services"
                          className="navbar__dropdown-link"
                          onClick={() => setServicesOpen(false)}
                        >
                          View All Services
                        </a>
                      </li>
                    </ul>
                  </li>
                );
              }

              /* ---- FAQ ---- */
              if (link.label === "FAQ") {
                return (
                  <li key={link.label} className="navbar__item">
                    <button
                      className="navbar__link"
                      onClick={(e) => handleNavClick(e, link)}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              }

              /* ---- NORMAL LINKS ---- */
              return (
                <li key={link.label} className="navbar__item">
                  <a
                    href={link.href || "#home"}
                    className="navbar__link"
                    onClick={() => { setMenuOpen(false); setServicesOpen(false); }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}

            {/* CTA */}
            <li className="navbar__item">
              <button
                className="navbar__link navbar__cta"
                onClick={() => {
                  setMenuOpen(false);
                  setServicesOpen(false);
                  if (onContactClick) onContactClick();
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>

          {/* HAMBURGER */}
          <button
            className="navbar__hamburger"
            onClick={() => {
              setMenuOpen((prev) => !prev);
              if (menuOpen) setServicesOpen(false);
            }}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
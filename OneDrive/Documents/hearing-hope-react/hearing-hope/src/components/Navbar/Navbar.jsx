import React, { useState } from "react";
import "./Navbar.css";
import { NAV_LINKS, HEARING_BRANDS, PRODUCTS } from "../../data/constants";

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
            Indian Speech &amp; Hearing<span> Clinic</span>
          </a>

          {/* Nav Links */}
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

                {/* Hearing Aids Dropdown — all brands + models */}
                {link.label === "Hearing Aids" && (
                  <ul className="navbar__dropdown navbar__dropdown--wide">
                    <li className="navbar__dropdown-heading">By Style</li>
                    {HEARING_TYPE_LINKS.map((item) => (
                      <li key={item.label}>
                        <a
                          href="#brands"
                          className="navbar__dropdown-link"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                    <li className="navbar__dropdown-heading">Top Brands</li>
                    {HEARING_BRANDS.map((brand) => (
                      <li key={brand.id}>
                        <button
                          className="navbar__dropdown-link navbar__dropdown-btn"
                          onClick={() => {
                            onBrandSelect && onBrandSelect(brand);
                            setMenuOpen(false);
                          }}
                        >
                          <i className={brand.icon} style={{ marginRight: 8, color: "var(--primary)" }}></i>
                          {brand.brand}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Generic dropdown for other items */}
                {link.dropdown &&
                  link.label !== "Services" &&
                  link.label !== "Hearing Aids" && (
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
              <a
                href="#contact"
                className="navbar__link navbar__cta"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </a>
            </li>
          </ul>

          {/* Hamburger */}
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

// Hearing aid styles for dropdown
const HEARING_TYPE_LINKS = [
  { label: "BTE Hearing Aids" },
  { label: "CIC Hearing Aids" },
  { label: "ITC Hearing Aids" },
  { label: "IIC Hearing Aids" },
  { label: "RIC / RITE Hearing Aids" },
  { label: "Rechargeable Hearing Aids" },
  { label: "Bluetooth Hearing Aids" },
];

// Services data mirrored for dropdown
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
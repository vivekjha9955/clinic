import React, { useState } from "react";
import "./Navbar.css";
import { NAV_LINKS } from "../../data/constants";
import logo from "../../assets/WhatsApp Image 2026-03-02 at 6.43.12 PM.jpeg";

const Navbar = ({ onFAQClick, onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, link) => {
    if (link.label === "FAQ") {
      e.preventDefault();
      onFAQClick && onFAQClick();
      setMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__inner">

          {/* LOGO */}
          <a
            href="#home"
            className="navbar__logo"
            onClick={() => setMenuOpen(false)}
          >
            <img src={logo} alt="Logo" className="navbar__logo-img" />
            <span className="navbar__logo-text">
              Indian Speech and Hearing
              <span className="navbar__logo-accent"> Clinic</span>
            </span>
          </a>

          {/* NAV LINKS */}
          <ul className={`navbar__links ${menuOpen ? "navbar__links--open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.label} className="navbar__item">

                {/* FAQ */}
                {link.label === "FAQ" ? (
                  <button
                    className="navbar__link"
                    onClick={(e) => handleNavClick(e, link)}
                  >
                    {link.label}
                  </button>
                ) : link.label === "Services" ? (

                  // 🔥 SERVICES FIXED
                  <a
                    href="#services"
                    className="navbar__link"
                    onClick={(e) => {
                      if (window.innerWidth <= 992) {
                        e.preventDefault();

                        // close menu
                        setMenuOpen(false);

                        // scroll
                        const section = document.querySelector("#services");
                        if (section) {
                          section.scrollIntoView({ behavior: "smooth" });
                        }
                      } else {
                        setMenuOpen(false);
                      }
                    }}
                  >
                    Services
                    {/* <i className="fas fa-chevron-down navbar__chevron"></i> */}
                  </a>

                ) : (
                  <a
                    href={link.href || "#home"}
                    className="navbar__link"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}

            {/* CTA */}
            <li>
              <button
                className="navbar__link navbar__cta"
                onClick={() => {
                  setMenuOpen(false);
                  onContactClick && onContactClick();
                }}
              >
                Contact Us
              </button>
            </li>

          </ul>

          {/* HAMBURGER */}
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
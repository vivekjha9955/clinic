import React, { useState, useEffect } from "react";
import "./styles/global.css";

import TopBar from "./components/Navbar/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AppointmentBar from "./components/AppointmentBar/AppointmentBar";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Stats from "./components/Stats/Stats";
import WhyTrust from "./components/WhyTrust/WhyTrust";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import HearingLossSeverity from "./components/HearingLossSeverity/HearingLossSeverity";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/Common/FloatingButtons";
import Brands from "./components/Brands/Brands";
import HearingTypes from "./components/HearingTypes/HearingTypes";
import FAQPage from "./components/FAQ/FAQ";
import ContactPage from "./components/ContactPage/ContactPage";
import BrandDetail from "./components/Brands/BrandDetail";
import ServiceDetail from "./components/Services/Servicedetails";
import OccupationalTherapy from "./components/OccupationalTherapySection/OccupationalTherapySection";
import SpeechTherapySection from "./components/SpeechTherapy/SpeechTherapySection";
import HearingImportance from "./components/HearingImportance/HearingImportance";

function App() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showContactPage, setShowContactPage] = useState(false);

  // Global handler: any #contact link opens ContactPage
  useEffect(() => {
    const handleContactLinkClick = (e) => {
      const contactTrigger = e.target.closest('a[href="#contact"], button[data-contact-trigger="true"]');

      if (contactTrigger) {
        e.preventDefault();

        if (!showContactPage) {
          window.history.pushState({ contactPage: true }, "", "#contact-page");
          setShowContactPage(true);
        }
      }
    };

    document.addEventListener("click", handleContactLinkClick);

    return () => {
      document.removeEventListener("click", handleContactLinkClick);
    };
  }, [showContactPage]);

  // Browser back button support
  useEffect(() => {
    const handlePopState = () => {
      if (showContactPage) {
        setShowContactPage(false);
      }
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [showContactPage]);

  // Safe open function for Navbar / future use
  const openContactPage = () => {
    if (!showContactPage) {
      window.history.pushState({ contactPage: true }, "", "#contact-page");
      setShowContactPage(true);
    }
  };

  return (
    <div className="App" id="home">
      <TopBar />

      <Navbar
        onFAQClick={() => setShowFAQ(true)}
        onBrandSelect={(brand) => setSelectedBrand(brand)}
        onServiceSelect={(svc) => setSelectedService(svc)}
        onContactClick={openContactPage}
      />

      <Hero />
      <AppointmentBar />
      <HearingImportance />
      <Services />
      <About />
      <Stats />
      <Brands />
      <HearingTypes />
      <HearingLossSeverity />
      <SpeechTherapySection />
      <OccupationalTherapy />
      <WhyTrust />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />

      {showFAQ && <FAQPage onClose={() => setShowFAQ(false)} />}

      {selectedBrand && (
        <BrandDetail
          brand={selectedBrand}
          onClose={() => setSelectedBrand(null)}
        />
      )}

      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}

      {showContactPage && (
        <ContactPage
          onClose={() => {
            if (window.location.hash === "#contact-page") {
              window.history.back();
            } else {
              setShowContactPage(false);
            }
          }}
        />
      )}
    </div>
  );
}

export default App;
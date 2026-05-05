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
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/Common/FloatingButtons";
import Brands from "./components/Brands/Brands";
import HearingTypes from "./components/HearingTypes/HearingTypes";
import FAQPage from "./components/FAQ/FAQ";
import ContactPage from "./components/ContactPage/ContactPage";
import BrandDetail from "./components/Brands/BrandDetail";
import ServiceDetail from "./components/Services/Servicedetails";
import QuickEnquiry from "./components/Common/QuickEnquiry";
function App() {
  const [showFAQ, setShowFAQ]           = useState(false);
  const [selectedBrand, setSelectedBrand]   = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [showContactPage, setShowContactPage] = useState(false);

  // ── OPEN helpers — each pushes its own history entry ──────────────────
  const openFAQ = () => {
    window.history.pushState({ modal: "faq" }, "");
    setShowFAQ(true);
  };

  const openBrandDetail = (brand) => {
    window.history.pushState({ modal: "brand", brandId: brand.id }, "");
    setSelectedBrand(brand);
  };

  const openServiceDetail = (service) => {
    window.history.pushState({ modal: "service", serviceId: service.id }, "");
    setSelectedService(service);
  };

  const openContactPage = () => {
    window.history.pushState({ modal: "contact" }, "");
    setShowContactPage(true);
  };

  // ── CLOSE helper — just go back; popstate handler will close the modal ─
  const closeByBack = () => {
    window.history.back();
  };

  // ── POPSTATE — fired when browser/Android back is pressed ─────────────
  useEffect(() => {
    const handlePopState = (e) => {
      const state = e.state;

      // Close whichever modal is currently open (one at a time)
      setShowContactPage(false);
      setSelectedBrand(null);
      setSelectedService(null);
      setShowFAQ(false);

      // If the state we're going back TO is another modal, re-open it
      if (state) {
        if (state.modal === "faq")     setShowFAQ(true);
        if (state.modal === "brand")   {/* BrandDetail re-open not needed — user just wants to close */}
        if (state.modal === "service") {/* same */}
        if (state.modal === "contact") setShowContactPage(true);
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <div className="App" id="home">
      <TopBar />
      <Navbar
        onFAQClick={openFAQ}
        onBrandSelect={openBrandDetail}
        onServiceSelect={openServiceDetail}
        onContactClick={openContactPage}
      />
      <Hero />
      <AppointmentBar />
      <Services
        onServiceSelect={openServiceDetail}
        onContactClick={openContactPage}
      />
      <About />
      <Stats />
      <QuickEnquiry onClick={openContactPage} />
      <Brands
        onBrandSelect={openBrandDetail}
        onContactClick={openContactPage}
      />
      <HearingTypes onContactClick={openContactPage} />
      <WhyTrust />
      <Testimonials />
      <Contact />
      <Footer />
      <FloatingButtons />

      {showFAQ && (
        <FAQPage onClose={closeByBack} />
      )}
      {selectedBrand && (
        <BrandDetail
          brand={selectedBrand}
          onClose={closeByBack}
          onContactClick={openContactPage}
        />
      )}
      {selectedService && (
        <ServiceDetail
          service={selectedService}
          onClose={closeByBack}
          onContactClick={openContactPage}
        />
      )}
      {showContactPage && (
        <ContactPage onClose={closeByBack} />
      )}
    </div>
  );
}

export default App;
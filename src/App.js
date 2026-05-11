// 
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
import HearingLossSe from "./components/HearingImportance/HearingImportance";
import HearingLoss from "./components/HearingLossSeverity/HearingLossSeverity";

function App() {

  const [showFAQ, setShowFAQ] = useState(false);

  const [selectedBrand, setSelectedBrand] =
    useState(null);

  const [selectedService, setSelectedService] =
    useState(null);

  const [showContactPage, setShowContactPage] =
    useState(false);

  /* =========================
     OPEN FAQ
  ========================= */
  const openFAQ = () => {
    window.history.pushState(
      { modal: "faq" },
      ""
    );

    setShowFAQ(true);
  };

  /* =========================
     OPEN BRAND
  ========================= */
  const openBrandDetail = (brand) => {
    window.history.pushState(
      {
        modal: "brand",
        brandId: brand.id,
      },
      ""
    );

    setSelectedBrand(brand);
  };

  /* =========================
     OPEN SERVICE
  ========================= */
  const openServiceDetail = (
    service
  ) => {
    window.history.pushState(
      {
        modal: "service",
        serviceId: service.id,
      },
      ""
    );

    setSelectedService(service);
  };

  /* =========================
     OPEN CONTACT
  ========================= */
  const openContactPage = () => {
    window.history.pushState(
      { modal: "contact" },
      ""
    );

    setShowContactPage(true);
  };

  /* =========================
     CLOSE MODALS
  ========================= */
  const closeByBack = () => {
    window.history.back();
  };

  /* =========================
     HANDLE BROWSER BACK
  ========================= */
  useEffect(() => {

    const handlePopState = (
      e
    ) => {
      const state = e.state;

      /* CLOSE EVERYTHING */
      setShowContactPage(false);
      setSelectedBrand(null);
      setSelectedService(null);
      setShowFAQ(false);

      /* REOPEN IF NEEDED */
      if (state) {

        if (
          state.modal === "faq"
        ) {
          setShowFAQ(true);
        }

        if (
          state.modal === "contact"
        ) {
          setShowContactPage(true);
        }
      }
    };

    window.addEventListener(
      "popstate",
      handlePopState
    );

    return () => {
      window.removeEventListener(
        "popstate",
        handlePopState
      );
    };

  }, []);

  return (
    <div className="App" id="home">

      <TopBar />

      <Navbar
        onFAQClick={openFAQ}
        onBrandSelect={
          openBrandDetail
        }
        onServiceSelect={
          openServiceDetail
        }
        onContactClick={
          openContactPage
        }
      />

      <Hero />

      <AppointmentBar />

      <Services
        onServiceSelect={
          openServiceDetail
        }
        onContactClick={
          openContactPage
        }
      />

      <HearingLossSe />

      <HearingLoss />

      <About />

      <Stats />

      <QuickEnquiry
        onClick={
          openContactPage
        }
      />

      <HearingTypes
        onContactClick={
          openContactPage
        }
      />

      <Brands
        onBrandSelect={
          openBrandDetail
        }
        onContactClick={
          openContactPage
        }
      />

      <WhyTrust />

      <Testimonials />

      <Contact />

      <Footer />

      <FloatingButtons />

      {/* FAQ MODAL */}
      {showFAQ && (
        <FAQPage
          onClose={closeByBack}
        />
      )}

      {/* BRAND DETAIL */}
      {selectedBrand && (
        <BrandDetail
          brand={selectedBrand}
          onClose={closeByBack}
          onContactClick={
            openContactPage
          }
        />
      )}

      {/* SERVICE DETAIL */}
      {selectedService && (
        <ServiceDetail
          service={
            selectedService
          }
          onClose={closeByBack}
          onContactClick={
            openContactPage
          }
        />
      )}

      {/* CONTACT PAGE */}
      {showContactPage && (
        <ContactPage
          onClose={closeByBack}
        />
      )}

    </div>
  );
}

export default App;
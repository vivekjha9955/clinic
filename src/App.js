import React, { useState } from "react";
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
// import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
// import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/Common/FloatingButtons";
import Brands from "./components/Brands/Brands";
import FAQPage from "./components/FAQ/FAQ";
import BrandDetail from "./components/Brands/BrandDetail";
import ServiceDetail from "./components/Services/Servicedetails";

function App() {
  const [showFAQ, setShowFAQ] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="App" id="home">
      <TopBar />
      <Navbar
        onFAQClick={() => setShowFAQ(true)}
        onBrandSelect={(brand) => setSelectedBrand(brand)}
        onServiceSelect={(svc) => setSelectedService(svc)}
      />
      <Hero />
      <AppointmentBar />
      <Services />
      <About />
      <Stats />
      <Brands />
      <WhyTrust />
      <Testimonials />
      {/* <Certifications /> */}
      <Contact />
      {/* <Blogs /> */}
      <Footer />
      <FloatingButtons />

      {/* Overlays */}
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
    </div>
  );
}

export default App;
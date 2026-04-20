import React, { useEffect } from "react";
import "./BrandDetail.css";

// Brand logos
import phonakImg from "../../assets/phonak.png";
import signiaImg from "../../assets/signia.jpg";
import widexImg from "../../assets/widex.jpg";
import oticonImg from "../../assets/Oticon-Hearing-Aids.jpg";
import starkeyImg from "../../assets/starkey.jpg";
import resoundImg from "../../assets/resound.png";
import unitronImg from "../../assets/unitron.jpg";

// Model images
import AudioParadiseImg from "../../assets/AudioParadise.jpg";
import NaidaParadiseImg from "../../assets/NaidaParadise.jpg";
import VirtoParadiseImg from "../../assets/VirtoParadise.jpg";
import SkyMarvelImg from "../../assets/SkyMarvel.jpg";
import BoleroMarvelImg from "../../assets/BoleroMarvel.jpg";
import ResoundNexiaITCImg from "../../assets/ResoundNexiaITC.jpg";
import SigniaPureChargeImg from "../../assets/SigniaPureCharge&GoIX.jpg";
import SigniaInsioAXImg from "../../assets/SigniaInsioAX.jpg";
import SigniaSilkImg from "../../assets/SigniaSilkCharge_Go.jpg";
import SigniaActiveProImg from "../../assets/Signia-Active-Pro-768x768.png";
import SigniaFunSPImg from "../../assets/SigniaFunSP.png";
import SigniaStylettoIXImg from "../../assets/SigniaStylettoIX.jpg";

import WidexWideMomentImg from "../../assets/WidexWidexMoment.jpg";
import WidexSmartRICImg from "../../assets/WidexSmartRIC.jpg";
import WidexEvokeImg from "../../assets/WidexEvoke.png";
import WidexEasywearImg from "../../assets/WidexEasywear.jpg";

import OticonRealImg from "../../assets/OticonReal.png";
import OticonMoreImg from "../../assets/OticonMore.jpg";
import OticonOwnImg from "../../assets/OticonOwn.jpg";
import OticonPlayPXImg from "../../assets/OticonPlayPX.jpg";
import OticonXceedImg from "../../assets/OticonXceed.jpg";

import StarkeyEvolv from "../../assets/starkey-evolv-ai-2000-digital-hearing-aids-1000x1000.jpg";
import StarkeyLivio from "../../assets/Starkey-Livio-AI.jpg";
import StarkeySoundLens from "../../assets/Starkey-SoundLens-iQ-IIC.jpg";
import StarkeyGenesis from "../../assets/starkey-genesis-ai-16-cic-hearing-aids.jpg";

import ReSoundNexiaImg from "../../assets/ReSoundNexia.jpg";
import ReSoundOmniaImg from "../../assets/ReSoundOmnia.jpg";
import ReSoundONEImg from "../../assets/ReSoundONE.jpg";
import ENZOQImg from "../../assets/ENZOQ.jpg";
import ReSoundKeyImg from "../../assets/ReSoundKey.jpg";

import UnitronMoxiBluImg from "../../assets/UnitronMoxiBlu.jpg";
import UnitronInseraImg from "../../assets/UnitronInsera.jpg";
import UnitronStridePImg from "../../assets/UnitronStrideP.jpg";

const BRAND_IMAGES = {
  Phonak: phonakImg,
  Signia: signiaImg,
  Widex: widexImg,
  Oticon: oticonImg,
  Starkey: starkeyImg,
  ReSound: resoundImg,
  Unitron: unitronImg,
};

const MODEL_IMAGES = {
  "Phonak_Audeo Lumity": AudioParadiseImg,
  "Phonak_Audeo Paradise": AudioParadiseImg,
  "Phonak_Naída Paradise": NaidaParadiseImg,
  "Phonak_Virto Paradise": VirtoParadiseImg,
  "Phonak_Sky Marvel": SkyMarvelImg,
  "ResoundNexiaITC.jpg": ResoundNexiaITCImg,
  "Phonak_Bolero Marvel": BoleroMarvelImg,

  "Signia_Pure Charge & Go IX": SigniaPureChargeImg,
  "Signia_Styletto IX": SigniaStylettoIXImg,
  "Signia_Insio AX": SigniaInsioAXImg,
  "Signia_Silk Charge & Go": SigniaSilkImg,
  "Signia_Active Pro": SigniaActiveProImg,
  "Signia_Fun SP": SigniaFunSPImg,

  "Widex_Widex Moment": WidexWideMomentImg,
  "Widex_Widex SmartRIC": WidexSmartRICImg,
  "Widex_Widex Evoke": WidexEvokeImg,
  "Widex_Widex Easywear": WidexEasywearImg,
  "Widex_Widex Moment Sheer": WidexWideMomentImg,

  "Oticon_Oticon Real": OticonRealImg,
  "Oticon_Oticon More": OticonMoreImg,
  "Oticon_Oticon Own": OticonOwnImg,
  "Oticon_Oticon Play PX": OticonPlayPXImg,
  "Oticon_Oticon Xceed": OticonXceedImg,

  "Starkey_Evolv AI": StarkeyEvolv,
  "Starkey_Genesis AI": StarkeyGenesis,
  "Starkey_Livio AI": StarkeyLivio,
  "Starkey_SoundLens": StarkeySoundLens,
  "Starkey_Muse iQ": starkeyImg,

  "ReSound_ReSound Nexia": ReSoundNexiaImg,
  "ReSound_ReSound Omnia": ReSoundOmniaImg,
  "ReSound_ReSound ONE": ReSoundONEImg,
  "ReSound_ENZO Q": ENZOQImg,
  "ReSound_ReSound Key": ReSoundKeyImg,

  "Unitron_Moxi Blu": UnitronMoxiBluImg,
  "Unitron_Moxi Jump": UnitronMoxiBluImg,
  "Unitron_Insera": UnitronInseraImg,
  "Unitron_Stride P": UnitronStridePImg,
};

const BRAND_THEMES = {
  Phonak: {
    accent: "#3f37c9",
    soft: "#eef0ff",
    btn: "#3f37c9",
    btnHover: "#2f28a8",
    gradient: "linear-gradient(135deg, #eef0ff 0%, #ffffff 100%)",
  },
  Signia: {
    accent: "#0f766e",
    soft: "#e8fbf8",
    btn: "#0f766e",
    btnHover: "#0b5b55",
    gradient: "linear-gradient(135deg, #e8fbf8 0%, #ffffff 100%)",
  },
  Widex: {
    accent: "#7c3aed",
    soft: "#f3ecff",
    btn: "#7c3aed",
    btnHover: "#6428d4",
    gradient: "linear-gradient(135deg, #f3ecff 0%, #ffffff 100%)",
  },
  Oticon: {
    accent: "#2563eb",
    soft: "#eaf2ff",
    btn: "#2563eb",
    btnHover: "#1d4ed8",
    gradient: "linear-gradient(135deg, #eaf2ff 0%, #ffffff 100%)",
  },
  Starkey: {
    accent: "#ea580c",
    soft: "#fff1e8",
    btn: "#ea580c",
    btnHover: "#c2410c",
    gradient: "linear-gradient(135deg, #fff1e8 0%, #ffffff 100%)",
  },
  ReSound: {
    accent: "#be123c",
    soft: "#ffeaf0",
    btn: "#be123c",
    btnHover: "#9f1239",
    gradient: "linear-gradient(135deg, #ffeaf0 0%, #ffffff 100%)",
  },
  Unitron: {
    accent: "#0d9488",
    soft: "#e8fffb",
    btn: "#0d9488",
    btnHover: "#0f766e",
    gradient: "linear-gradient(135deg, #e8fffb 0%, #ffffff 100%)",
  },
};

const getModelDetails = (model) => {
  const type = model.type.toLowerCase();
  const name = model.name.toLowerCase();

  let bestFor = "Mild to moderate hearing loss";
  let battery = "Long-lasting battery performance";
  let connectivity = "Advanced wireless connectivity";
  let fitStyle = model.type;
  let technology = "Noise reduction & speech enhancement";
  let suitableFor = "Adults and seniors";

  if (type.includes("ric")) {
    bestFor = "Mild to severe hearing loss";
    battery = name.includes("charge") || name.includes("recharge") ? "Rechargeable battery" : "Long battery life";
    connectivity = "Bluetooth streaming & app support";
    fitStyle = "Receiver-in-Canal (RIC)";
    technology = "Natural sound with adaptive speech focus";
    suitableFor = "Working professionals, adults, seniors";
  }

  if (type.includes("bte")) {
    bestFor = "Moderate to profound hearing loss";
    battery = "High power, long-lasting battery";
    connectivity = "Strong wireless support";
    fitStyle = "Behind-the-Ear (BTE)";
    technology = "Power amplification with speech clarity";
    suitableFor = "Adults, seniors, and high-gain users";
  }

  if (type.includes("custom") || type.includes("itc") || type.includes("iic") || type.includes("cic")) {
    bestFor = "Mild to moderately severe hearing loss";
    battery = "Compact efficient battery";
    connectivity = "Discreet modern connectivity";
    fitStyle = "Custom in-ear fit";
    technology = "Invisible design with personalised fit";
    suitableFor = "Style-conscious adults and first-time users";
  }

  if (type.includes("children")) {
    bestFor = "Paediatric hearing support";
    battery = "Durable child-friendly battery system";
    connectivity = "School & family-friendly compatibility";
    fitStyle = "Safe and secure BTE fit";
    technology = "Speech and language development support";
    suitableFor = "Children and young learners";
  }

  if (type.includes("family")) {
    bestFor = "Everyday versatile hearing support";
    battery = "Reliable all-day performance";
    connectivity = "Easy device compatibility";
    fitStyle = "Comfort-focused daily wear";
    technology = "Balanced sound for varied environments";
    suitableFor = "Families, adults, and elderly users";
  }

  if (name.includes("ai")) {
    technology = "AI-powered adaptive sound processing";
    connectivity = "Smart app control + Bluetooth streaming";
  }

  if (name.includes("charge") || name.includes("recharge")) {
    battery = "Rechargeable all-day battery";
  }

  return { bestFor, battery, connectivity, fitStyle, technology, suitableFor };
};

const DetailModelCard = ({ model, brandName, onClose, theme }) => {
  const img = MODEL_IMAGES[`${brandName}_${model.name}`] || BRAND_IMAGES[brandName];
  const details = getModelDetails(model);

  return (
    <div
      className="detail-model-card"
      style={{
        "--brand-accent": theme.accent,
        "--brand-soft": theme.soft,
        "--brand-btn": theme.btn,
        "--brand-btn-hover": theme.btnHover,
      }}
    >
      <div className="detail-model-card__photo">
        <div className="detail-model-card__img-circle">
          {img ? (
            <img src={img} alt={model.name} className="detail-model-card__real-img" />
          ) : (
            <i className={model.icon}></i>
          )}
        </div>
        <div className="detail-model-card__badge">{model.type}</div>
      </div>

      <div className="detail-model-card__body">
        <h3 className="detail-model-card__name">{model.name}</h3>
        <p className="detail-model-card__desc">{model.desc}</p>

        <div className="detail-model-card__info-grid">
          <div className="info-box">
            <span className="info-label">Best For</span>
            <span className="info-value">{details.bestFor}</span>
          </div>

          <div className="info-box">
            <span className="info-label">Battery</span>
            <span className="info-value">{details.battery}</span>
          </div>

          <div className="info-box">
            <span className="info-label">Connectivity</span>
            <span className="info-value">{details.connectivity}</span>
          </div>

          <div className="info-box">
            <span className="info-label">Fit Style</span>
            <span className="info-value">{details.fitStyle}</span>
          </div>

          <div className="info-box">
            <span className="info-label">Technology</span>
            <span className="info-value">{details.technology}</span>
          </div>

          <div className="info-box">
            <span className="info-label">Suitable For</span>
            <span className="info-value">{details.suitableFor}</span>
          </div>
        </div>

        <a href="#contact" className="detail-model-card__cta" onClick={onClose}>
          <i className="fas fa-calendar-check"></i> Book Free Consultation
        </a>
      </div>
    </div>
  );
};

const BrandDetail = ({ brand, onClose }) => {
  const brandImg = BRAND_IMAGES[brand.brand];
  const theme = BRAND_THEMES[brand.brand] || BRAND_THEMES.Phonak;

  useEffect(() => {
    document.body.style.overflow = "hidden";
    window.history.pushState({ brandDetail: true }, "");

    const handlePopState = () => onClose();
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("popstate", handlePopState);
    };
  }, [onClose]);

  const handleClose = () => {
    if (window.history.state && window.history.state.brandDetail) {
      window.history.back();
    } else {
      onClose();
    }
  };

  return (
    <div
      className="detail-page"
      style={{
        "--brand-accent": theme.accent,
        "--brand-soft": theme.soft,
        "--brand-btn": theme.btn,
        "--brand-btn-hover": theme.btnHover,
        "--brand-gradient": theme.gradient,
      }}
    >
      <div className="detail-header">
        <div className="container detail-header__inner">
          <button className="detail-back" onClick={handleClose}>
            <i className="fas fa-arrow-left"></i> Back
          </button>

          <div className="detail-header__content">
            <div className="detail-header__icon">
              {brandImg ? (
                <img src={brandImg} alt={brand.brand} className="detail-header__brand-img" />
              ) : (
                <i className={brand.icon}></i>
              )}
            </div>

            <div>
              <h1 className="detail-header__brand">{brand.brand}</h1>
              <p className="detail-header__tagline">{brand.tagline}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="detail-body">
        <div className="container">
          <div className="detail-overview">
            <div className="detail-overview__text">
              <span className="detail-section-tag">About {brand.brand}</span>
              <h2 className="detail-overview__title">Explore Premium {brand.brand} Hearing Solutions</h2>
              <p>
                {brand.tagline}. Discover advanced hearing devices designed for comfort,
                speech clarity, better connectivity, and personalised hearing support for
                every lifestyle and age group.
              </p>

              <div className="detail-overview__badges">
                <span><i className="fas fa-check-circle"></i> Premium Sound Quality</span>
                <span><i className="fas fa-check-circle"></i> Rechargeable Options</span>
                <span><i className="fas fa-check-circle"></i> Bluetooth Ready</span>
                <span><i className="fas fa-check-circle"></i> Custom Fitting Available</span>
              </div>
            </div>

            <div className="detail-overview__img">
              {brandImg ? (
                <img src={brandImg} alt={brand.brand} className="detail-overview__real-img" />
              ) : (
                <i className={brand.icon}></i>
              )}
            </div>
          </div>

          <div className="detail-models-section">
            <div className="detail-section-header">
              <span className="detail-section-tag">Models</span>
              <h2 className="detail-section-title">{brand.brand} Hearing Aid Models</h2>
              <p className="detail-section-subtitle">
                Compare popular models with better clarity on fit, battery, technology, and ideal usage.
              </p>
            </div>

            <div className="detail-models-grid">
              {brand.models.map((model, idx) => (
                <DetailModelCard
                  key={idx}
                  model={model}
                  brandName={brand.brand}
                  onClose={handleClose}
                  theme={theme}
                />
              ))}
            </div>
          </div>

          <div className="detail-cta-banner">
            <div className="detail-cta-banner__text">
              <h3>Interested in {brand.brand} Hearing Aids?</h3>
              <p>
                Book a free consultation with our expert audiologists and get the best
                hearing aid recommendation based on your hearing needs.
              </p>
            </div>

            <a href="#contact" className="detail-cta-banner__btn" onClick={handleClose}>
              <i className="fas fa-phone"></i> Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetail;
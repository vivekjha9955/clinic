import React, { useState } from "react";
import "./Brands.css";
import { HEARING_BRANDS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";
import BrandDetail from "./BrandDetail";

// Brand logos
import ResoundNexiaITCImg from "../../assets/ResoundNexiaITC.jpg";
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
  "Phonak_Bolero Marvel": BoleroMarvelImg,
  "ResoundNexiaITC.jpg": ResoundNexiaITCImg,

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
  },
  Signia: {
    accent: "#0f766e",
    soft: "#e8fbf8",
    btn: "#0f766e",
    btnHover: "#0b5b55",
  },
  Widex: {
    accent: "#7c3aed",
    soft: "#f3ecff",
    btn: "#7c3aed",
    btnHover: "#6428d4",
  },
  Oticon: {
    accent: "#2563eb",
    soft: "#eaf2ff",
    btn: "#2563eb",
    btnHover: "#1d4ed8",
  },
  Starkey: {
    accent: "#ea580c",
    soft: "#fff1e8",
    btn: "#ea580c",
    btnHover: "#c2410c",
  },
  ReSound: {
    accent: "#be123c",
    soft: "#ffeaf0",
    btn: "#be123c",
    btnHover: "#9f1239",
  },
  Unitron: {
    accent: "#0d9488",
    soft: "#e8fffb",
    btn: "#0d9488",
    btnHover: "#0f766e",
  },
};

const ModelCard = ({ model, brandName, onSelect }) => {
  const img = MODEL_IMAGES[`${brandName}_${model.name}`] || BRAND_IMAGES[brandName];
  const theme = BRAND_THEMES[brandName] || BRAND_THEMES.Phonak;

  return (
    <div
      className="model-card"
      style={{
        "--brand-accent": theme.accent,
        "--brand-soft": theme.soft,
        "--brand-btn": theme.btn,
        "--brand-btn-hover": theme.btnHover,
      }}
    >
      <div className="model-card__top">
        <div className="model-card__img-circle">
          {img ? (
            <img src={img} alt={model.name} className="model-card__img" />
          ) : (
            <i className={model.icon}></i>
          )}
        </div>
      </div>

      <div className="model-card__body">
        <span className="model-card__type">{model.type}</span>
        <h3 className="model-card__name">{model.name}</h3>
        <p className="model-card__desc">{model.desc}</p>

        <button className="model-card__btn" onClick={onSelect}>
          Read More <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

const BrandSection = ({ brand, onSelect }) => {
  const brandImg = BRAND_IMAGES[brand.brand];
  const theme = BRAND_THEMES[brand.brand] || BRAND_THEMES.Phonak;

  return (
    <div
      className="brand-section"
      style={{
        "--brand-accent": theme.accent,
        "--brand-soft": theme.soft,
        "--brand-btn": theme.btn,
        "--brand-btn-hover": theme.btnHover,
      }}
    >
      <div className="brand-section__header">
        <div className="brand-section__left">
          {brandImg && (
            <div className="brand-section__logo-wrap">
              <img src={brandImg} alt={brand.brand} className="brand-section__logo" />
            </div>
          )}

          <div className="brand-section__content">
            <h2 className="brand-section__name">{brand.brand}</h2>
            <p className="brand-section__tagline">{brand.tagline}</p>
          </div>
        </div>

        <button className="brand-section__all-btn" onClick={() => onSelect(brand)}>
          View All Models <i className="fas fa-arrow-right"></i>
        </button>
      </div>

      <div className="brand-section__models">
        {brand.models.slice(0, 3).map((model, idx) => (
          <ModelCard
            key={idx}
            model={model}
            brandName={brand.brand}
            onSelect={() => onSelect(brand)}
          />
        ))}
      </div>
    </div>
  );
};

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <section className="brands" id="brands">
      <div className="container">
        <SectionHeader
          tag="Top Brands"
          title="Hearing Devices & Models"
          subtitle="Explore premium hearing aid brands with elegant product cards, featured models, and detailed information tailored to your hearing needs."
        />

        <div className="brands-list">
          {HEARING_BRANDS.map((brand) => (
            <BrandSection key={brand.id} brand={brand} onSelect={setSelectedBrand} />
          ))}
        </div>
      </div>

      {selectedBrand && (
        <BrandDetail brand={selectedBrand} onClose={() => setSelectedBrand(null)} />
      )}
    </section>
  );
};

export default Brands;
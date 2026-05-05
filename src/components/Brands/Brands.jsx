import React from "react";
import "./Brands.css";
import { HEARING_BRANDS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";

// Brand logos
import phonakImg from "../../assetsSecond/phonak.png";
import signiaImg from "../../assetsSecond/signia.jpg";
import widexImg from "../../assetsSecond/widex.jpg";
import oticonImg from "../../assetsSecond/oticon.png";
import starkeyImg from "../../assetsSecond/Starkey.png";
import resoundImg from "../../assetsSecond/Resound.jpg";
import unitronImg from "../../assetsSecond/unitron.png";

const BRAND_IMAGES = {
  Phonak: phonakImg,
  Signia: signiaImg,
  Widex: widexImg,
  Oticon: oticonImg,
  Starkey: starkeyImg,
  ReSound: resoundImg,
  Unitron: unitronImg,
};

const BRAND_THEMES = {
  Phonak: "phonak",
  Signia: "signia",
  Widex: "widex",
  Oticon: "oticon",
  Starkey: "starkey",
  ReSound: "resound",
  Unitron: "unitron",
};

const BrandCard = ({ brand, onOpen }) => {
  const image = BRAND_IMAGES[brand.brand];
  const themeClass = BRAND_THEMES[brand.brand] || "default";

  return (
    <div className={`brand-card brand-card--${themeClass}`}>
      <div className="brand-card__inner">
        <div className="brand-card__decor brand-card__decor--one"></div>
        <div className="brand-card__decor brand-card__decor--two"></div>
        <div className="brand-card__decor brand-card__decor--three"></div>

        <div className="brand-card__image-wrap">
          {image ? (
            <img src={image} alt={brand.brand} className="brand-card__image" />
          ) : (
            <div className="brand-card__fallback">
              <i className={brand.icon}></i>
            </div>
          )}
        </div>

        <h3 className="brand-card__name">{brand.brand}</h3>

        <p className="brand-card__desc">
          {brand.tagline ||
            "Premium hearing aid solutions with advanced sound clarity and comfort."}
        </p>

        <div className="brand-card__meta">
          <span className="brand-card__badge">
            <i className="fas fa-cubes"></i> {brand.models?.length || 0} Models
          </span>
          <span className="brand-card__badge">
            <i className="fas fa-star"></i> Premium
          </span>
        </div>

        <button className="brand-card__btn" onClick={() => onOpen(brand)}>
          View All Models <i className="fas fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

const Brands = ({ onBrandSelect }) => {
  return (
    <section className="brands-section" id="brands">
      <div className="container">
        <SectionHeader
          tag="Top Brands"
          title="Hearing Devices & Models"
          subtitle="Explore world-class hearing aid brands trusted by audiologists globally. Compare top manufacturers, view available models, and discover the best fit for your hearing needs."
        />

        <div className="brands-grid">
          {HEARING_BRANDS.map((brand) => (
            <BrandCard
              key={brand.id}
              brand={brand}
              onOpen={onBrandSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
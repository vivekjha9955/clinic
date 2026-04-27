import React, { useState } from "react";
import "./Brands.css";
import { HEARING_BRANDS } from "../../data/constants";
import SectionHeader from "../Common/SectionHeader";
import BrandDetail from "./BrandDetail";

// Brand logos
import phonakImg from "../../assets/phonak.png";
import signiaImg from "../../assets/signia.jpg";
import widexImg from "../../assets/widex.jpg";
import oticonImg from "../../assets/Oticon-Hearing-Aids.jpg";
import starkeyImg from "../../assets/starkey.jpg";
import resoundImg from "../../assets/resound.png";
import unitronImg from "../../assets/unitron.jpg";

const BRAND_IMAGES = {
  Phonak: phonakImg,
  Signia: signiaImg,
  Widex: widexImg,
  Oticon: oticonImg,
  Starkey: starkeyImg,
  ReSound: resoundImg,
  Unitron: unitronImg,
};

const BrandCard = ({ brand, index, onOpen }) => {
  const image = BRAND_IMAGES[brand.brand];

  return (
    <div className={`brand-card brand-card--theme-${(index % 3) + 1}`}>
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
          {brand.tagline || "Premium hearing aid solutions with advanced sound clarity and comfort."}
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

const Brands = () => {
  const [selectedBrand, setSelectedBrand] = useState(null);

  return (
    <>
      <section className="brands-section" id="brands">
        <div className="container">
          <SectionHeader
            tag="Top Brands"
            title="Hearing Devices & Models"
            subtitle="Explore world-class hearing aid brands trusted by audiologists globally. Compare top manufacturers, view available models, and discover the best fit for your hearing needs."
          />

          <div className="brands-grid">
            {HEARING_BRANDS.map((brand, index) => (
              <BrandCard
                key={brand.id}
                brand={brand}
                index={index}
                onOpen={setSelectedBrand}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedBrand && (
        <BrandDetail
          brand={selectedBrand}
          onClose={() => setSelectedBrand(null)}
        />
      )}
    </>
  );
};

export default Brands;
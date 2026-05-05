import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import "./AllServices.css";

const ServicesSlider = ({ services, onSelect }) => {
  return (
    <div className="services-slider">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={16}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1.2 },
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="service-card">

              {/* IMAGE */}
              <div className="service-img-wrap">
                <img src={service.image} alt={service.title} />
              </div>

              {/* BODY */}
              <div className="service-body">
                <span className="service-tag">{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <button onClick={() => onSelect(service)}>
                  Read Detail →
                </button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServicesSlider;
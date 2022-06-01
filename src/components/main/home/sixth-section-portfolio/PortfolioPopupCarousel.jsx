import React, { useState } from "react";
// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "../../../../styles/main/home/sixth-section-portfolio-styles/portfolio-popup-carousel.styles.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const PortfolioPopupCarousel = (props) => {
  const { carouselData } = props;
  const [imageLoading, setImageLoading] = useState(false);
  return (
    <div className="portfolio_popup_swiper_container">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false
        // }}
        className="portfolio_popup_swiper"
      >
        {carouselData?.map((item, index) => (
          <SwiperSlide key={index} className="portfolio_popup_swiper_slide">
            <div
              className="portfolio_popup_swiper_img_container"
              // style={{ backgroundImage: `url(${item.img})` }}
            >
              <img
                className={`portfolio_popup_swiper_img ${
                  !imageLoading ? "image_loader" : ""
                }`}
                src={item.img}
                alt=""
                onLoad={() => setImageLoading(true)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PortfolioPopupCarousel;

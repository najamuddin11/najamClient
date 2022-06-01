import React, { useState } from "react";
import "../../../../styles/main/home/sixth-section-portfolio-styles/sixth-section.styles.scss";

const PortfolioCardComponent = (props) => {
  const { item, handlePortfolioPopup, handlePortfolioPopupData } = props;
  const [imageLoading, setImageLoading] = useState(false);

  const handleClick = () => {
    handlePortfolioPopupData(item);
    handlePortfolioPopup();
  };

  return (
    <div
      key={item.id}
      data-aos="fade-in"
      className="section_six_image_inner"
      onClick={handleClick}
    >
      <img
        className={`section_six_image ${!imageLoading ? "image_loader" : ""}`}
        src={item.image}
        alt=""
        onLoad={() => setImageLoading(true)}
      />

      <div
        className="section_six_image_overlay"
        // style={{
        //   background: item?.projectColor && item?.projectColor,
        // }}
      >
        <div className="section_six_image_text">
          {item?.projectLogo ? (
            <img
              className="portfolio_popup_project_logo"
              src={item?.projectLogo}
              alt=""
            />
          ) : (
            item?.title
          )}{" "}
          <br />
          {item.companyBuiltWith && (
            <span className="project_built_with">
              {" "}
              build with {item.companyBuiltWith}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCardComponent;

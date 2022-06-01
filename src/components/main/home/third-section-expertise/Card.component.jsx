import React from "react";
import "../../../../styles/main/home/third-section-expertise-styles/card.styles.scss";

const Card = (props) => {
  const { color, desc, icon, title, className } = props;
  return (
    <div data-aos="fade-up" className="section_three_card">
      <div>
        <div className="section_three_icon_container">
          <img
            className={`section_three_icon ${className}`}
            src={icon}
            alt="icon"
          />
        </div>
      </div>
      <div className="section_three_card_content_container">
        <h4 className="section_three_card_title">{title}</h4>
        <div className="section_three_card_content">{desc}</div>
      </div>
      <div className="section_three_card_border_bottom"></div>
    </div>
  );
};

export default Card;

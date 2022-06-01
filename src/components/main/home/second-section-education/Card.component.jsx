import React from "react";
import "../../../../styles/main/home/second-section-education-styles/card.styles.scss";

const Card = (props) => {
  const { city, duration, academy, degree, color, icon } = props;
  return (
    <div data-aos="fade-up" className="section_two_card_container">
      <div className="section_two_icon_container">
        <img src={icon} className="section_two_icon" />
      </div>
      <div className="section_two_card_content_container">
        <div className="section_two_card_inner_container">
          <div className="section_two_card_title_container">
            <h3>{degree}</h3>
            <div className="section_two_card_content">{duration}</div>
          </div>
          <div className="section_two_card_content">{academy}</div>
          <div className="section_two_card_content">{city}</div>
        </div>
        <div className="section_two_card_border_bottom"></div>
      </div>
    </div>
  );
};

export default Card;
